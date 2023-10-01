import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  contactForm!: FormGroup;
  messageIsSending: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2)]],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  async sendMail() {
    this.contactForm.disable();
    this.messageIsSending = true;

    // Animation anzeigen
    // todo...

    let formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('message', this.contactForm.get('message')?.value);

    try {
      const response = await fetch('https://manu-kapolke.developerakademie.net/portfolio/send_mail.php', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        // Request was successful, handle response here
        console.log('Mail sent successfully');
      } else {
        // Request failed, handle the error
        console.error('Mail sending failed:', response.statusText);
      }
    } catch (error) {
      // Network error or other exceptions
      console.error('An error occurred:', error);
    }

    // Text anzeigen: Nachricht gesendet
    // todo...

    this.messageIsSending = false;
    this.contactForm.enable();
  }
}
