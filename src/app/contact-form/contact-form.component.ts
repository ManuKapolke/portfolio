import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  formData = {
    name: '',
    email: '',
    message: '',
    checkbox: false
  };

  @ViewChild('contactForm') contactForm!: NgForm;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('emailField') emailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('policyCheckbox') policyCheckbox!: ElementRef;
  @ViewChild('sendButton') sendButton!: ElementRef;

  onNameChange() {
    // Check if the name field has any characters
    this.applyGreenBorder(this.nameField, this.formData.name);
  }

  onMessageChange() {
    // Check if the message field has any characters
    this.applyGreenBorder(this.messageField, this.formData.message);
  }

  onEmailChange() {
    if (this.formData.email) {
      // Check if the email field has a valid email address
      this.applyBorderColor(this.emailField, this.isValidEmail(this.formData.email));
    } else {
      this.removeRedBorder(this.emailField);
      this.removeGreenBorder(this.emailField);
    }
  }

  private applyGreenBorder(field: ElementRef, inputValue: string) {
    if (inputValue) {
      this.removeRedBorder(field);
      this.addGreenBorder(field);
    } else {
      this.removeGreenBorder(field);
    }
  }

  private applyBorderColor(field: ElementRef, isValid: boolean) {
    if (isValid) {
      this.removeRedBorder(field);
      this.addGreenBorder(field);
    } else {
      this.removeGreenBorder(field);
      this.addRedBorder(field);
    }
  }

  private isValidEmail(email: string): boolean {
    // Implement your email validation logic here
    // For a basic check, you can use a regular expression
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  private addGreenBorder(field: ElementRef) {
    field.nativeElement.classList.add('green-border');
  }

  private addRedBorder(field: ElementRef) {
    field.nativeElement.classList.add('red-border');
  }

  private removeGreenBorder(field: ElementRef) {
    field.nativeElement.classList.remove('green-border');
  }

  private removeRedBorder(field: ElementRef) {
    field.nativeElement.classList.remove('red-border');
  }

  inputIsValid(field: ElementRef): boolean {
    if (field === this.policyCheckbox) {
      return field.nativeElement.checked;
    } else {
      return field.nativeElement.classList.contains('green-border');
    }
  }


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
