import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @ViewChild('contactForm') contactForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('policyCheckbox') policyCheckbox!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  async sendMail() {
    let nameField = this.nameField.nativeElement;
    let emailField = this.emailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    let policyCheckbox = this.policyCheckbox.nativeElement;
    let sendButton = this.sendButton.nativeElement;

    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    policyCheckbox.disabled = true;
    sendButton.disabled = true;

    // Animation anzeigen
    // todo...

    let formData = new FormData();
    formData.append('name', nameField.value);
    formData.append('email', emailField.value);
    formData.append('message', messageField.value);

    // senden
    await fetch('https://manu-kapolke.developerakademie.net/portfolio/send_mail.php',
      {
        method: 'POST',
        body: formData
      }
    )

    // Text anzeigen: Nachricht gesendet
    console.log('Sent mail');
    // todo...

    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
    policyCheckbox.disabled = false;
    sendButton.disabled = false;
  }
}
