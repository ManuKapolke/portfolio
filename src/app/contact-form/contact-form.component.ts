import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  sending: boolean = false;
  messageIsSent: boolean = false;

  scrollTop: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],//Validators.minLength(2)
      message: ['', [Validators.required, Validators.minLength(2)]],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  async sendMail() {
    // document.body.style.overflowY = 'hidden';
    this.freezeBody();
    this.contactForm.disable();
    this.sending = true;

    try {
      const response = await fetch('https://manu-kapolke.developerakademie.net/angular-projects/portfolio/send_mail.php', {
        method: 'POST',
        body: this.getFormData()
      });

      if (response.ok) {
        console.log('Mail sent successfully');
      } else {
        console.error('Mail sending failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    setTimeout(() => {
      this.messageIsSent = true;
    }, 1200);
  }

  getFormData(): FormData {
    let formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('message', this.contactForm.get('message')?.value);
    return formData;
  }

  closeSendingScreen(): void {
    this.sending = false;
    this.messageIsSent = false;
    // document.body.style.overflowY = 'unset';
    this.unfreezeBody();
    this.contactForm.enable();
  }

  invalidInput(name: string): boolean {
    return name == 'email' ?
      this.contactForm.get(name)?.value.length > 0 && this.contactForm.get(name)?.hasError('email') || false :
      this.contactForm.get(name)?.value.length > 0 && this.contactForm.get(name)?.invalid && !this.contactForm.disabled || false;
  }

  validInput(name: string): boolean {
    return this.contactForm.get(name)?.valid || false;
  }

  freezeBody() {
    this.scrollTop = document.documentElement.scrollTop;
    document.body.style.setProperty('--scrollTop', `-${this.scrollTop}px`);
    document.body.classList.add('no-scrolling');
  }

  unfreezeBody() {
    document.body.classList.remove('no-scrolling');
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.scrollTop = this.scrollTop;
    document.documentElement.style.scrollBehavior = 'smooth';
  }

  getStyleForOverlayPosition() {
    console.log(this.scrollTop);

    return { 'top': this.scrollTop };
  }
}
