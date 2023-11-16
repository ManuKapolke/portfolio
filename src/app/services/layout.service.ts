import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  public version: 1 | 2 | 3 = 2;
  private mainColorA = ['#9747FF', '#4B47FF', '#FF4747'];
  private mainColorB = ['#70E61C', '#00BEE8', '#FA7902'];

  constructor() {
    this.setColorTheme(this.version);
  }

  setColorTheme(version: 1 | 2 | 3): void {
    document.documentElement.style.setProperty('--mainColorA', this.mainColorA[version - 1]);
    document.documentElement.style.setProperty('--mainColorB', this.mainColorB[version - 1]);
    document.documentElement.style.setProperty('--logoA', `url('assets/logo/v${version}_mk-logo_a.png')`);
    document.documentElement.style.setProperty('--logoB', `url('assets/logo/v${version}_mk-logo_b.png')`);
    document.documentElement.style.setProperty('--globeIconHover', `url('assets/icons/v${version}_globe_hover.png')`);
    document.documentElement.style.setProperty('--dropdownIconHover', `url('assets/icons/v${version}_down_hover.png')`);
    document.documentElement.style.setProperty('--checkmark', `url('assets/icons/v${version}_checkmark.png')`);
    document.documentElement.style.setProperty('--textareaResizer', `url('assets/icons/v${version}_textarea-resizer.png')`);
  }
}
