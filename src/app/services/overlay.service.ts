import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {
  sending: boolean = false;
  messageIsSent: boolean = false;

  scrollTop: number = 0;

  private closeScreenSubject: Subject<void> = new Subject<void>();

  closeScreen$(): Observable<void> {
    return this.closeScreenSubject.asObservable();
  }

  openSendingScreen(): void {
    this.freezeBody();
    this.sending = true;
  }

  closeSendingScreen(): void {
    this.sending = false;
    this.messageIsSent = false;
    this.unfreezeBody();
    this.closeScreenSubject.next();
  }

  setSendingFinished() {
    this.messageIsSent = true;
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

  // getStyleForOverlayPosition() {
  //   console.log(this.scrollTop);

  //   return { 'top': this.scrollTop };
  // }
}
