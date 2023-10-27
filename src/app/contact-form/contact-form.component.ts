import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OverlayService } from '../services/overlay.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  public contactForm!: FormGroup;
  private overlaySubscription!: Subscription;

  constructor(
    public overlayService: OverlayService,
    private formBuilder: FormBuilder
  ) {
    this.overlaySubscription = this.overlayService.closeScreenSubject$.subscribe(() => {
      this.contactForm.reset({ name: '', email: '', message: '', checkbox: false });
      this.contactForm.enable();
    });
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(2)]],
      checkbox: [false, Validators.requiredTrue]
    });
  }

  ngOnDestroy() {
    this.overlaySubscription.unsubscribe();
  }

  async sendMail() {
    this.prepareSending();

    try {
      const response = await this.postFormData();
      if (!response.ok) {
        throw new Error('Mail sending failed: ' + response.statusText);
      }
      this.finishSending();
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  prepareSending(): void {
    this.overlayService.openSendingScreen();
    this.contactForm.disable();
  }

  finishSending(): void {
    setTimeout(() => {
      this.overlayService.setSendingFinished();
    }, 1200);
  }

  async postFormData(): Promise<Response> {
    return fetch('https://manukapolke.de/send_mail.php', {
      method: 'POST',
      body: this.getFormData()
    });
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