import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  isHovered = false;
  isClicked = false;

  constructor(public translate: TranslateService) { }

  get isOpen() {
    return this.isClicked || this.isHovered;
  }

  toggleOnClick() {
    if (this.isClicked) {
      this.closeOnClick();
    } else {
      this.openOnClick();
    }
  }

  closeOnClick() {
    this.isClicked = false;
  }

  openOnClick() {
    this.isClicked = true;
  }

  closeOnHover() {
    this.isHovered = false;
  }

  openOnHover() {
    this.isHovered = true;
  }

  getLanguageFontColor(language: string): object {
    const fontColor = this.translate.currentLang === language ? 'var(--mainColorB)' : 'white';
    return { 'color': fontColor };
  }
}
