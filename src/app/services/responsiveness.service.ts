import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsivenessService {

  mobileViewIsOn(): boolean {
    return window.innerWidth < 900;
  }

  isTouchDevice() {
    return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  }
}
