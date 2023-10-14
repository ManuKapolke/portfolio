import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsivenessService {

  constructor() { }

  mobileViewIsOn(): boolean {
    return window.innerWidth < 900;
  }
}
