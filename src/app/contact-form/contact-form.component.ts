import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '../services/overlay.service';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public overlayService: OverlayService
  ) {
    this.overlayService.closeScreenSubject$.subscribe(() => {
      this.contactForm.enable();
    });
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],//Validators.minLength(2)
      message: ['', [Validators.required, Validators.minLength(2)]],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  async sendMail() {
    this.overlayService.openSendingScreen();
    this.contactForm.disable();

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
      this.overlayService.setSendingFinished();
    }, 1200);
  }

  getFormData(): FormData {
    let formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('message', this.contactForm.get('message')?.value);
    return formData;
  }

  invalidInput(name: string): boolean {
    return name == 'email' ?
      this.contactForm.get(name)?.value.length > 0 && this.contactForm.get(name)?.hasError('email') || false :
      this.contactForm.get(name)?.value.length > 0 && this.contactForm.get(name)?.invalid && !this.contactForm.disabled || false;
  }

  validInput(name: string): boolean {
    return this.contactForm.get(name)?.valid || false;
  }
}
