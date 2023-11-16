import { Component, ViewChild } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownIsOpen = false;
  dropdownIsOpenedByHovering = false;
  dropdownIsOpenedByClicking = false;

  constructor(public layoutService: LayoutService, public overlayService: OverlayService, public translate: TranslateService) { }

  translateToLanguage(language: 'en' | 'de'): void {
    this.translate.use(language)
    this.closeDropdownByHovering();
    this.closeDropdownByClicking();
  }

  closeDropdownByHovering() {
    this.dropdownIsOpenedByHovering = false;
    this.checkDropdown();
  }

  closeDropdownByClicking() {
    this.dropdownIsOpenedByClicking = false;
    this.dropdownIsOpenedByHovering = false;
    this.checkDropdown();
  }

  openDropdownByHovering() {
    this.dropdownIsOpenedByHovering = true;
    this.checkDropdown();
  }

  openDropdownByClicking() {
    this.dropdownIsOpenedByClicking = true;
    this.checkDropdown();
  }

  checkDropdown() {
    this.dropdownIsOpen = this.dropdownIsOpenedByClicking || this.dropdownIsOpenedByHovering;
  }

  toggleDropdown() {
    if (this.dropdownIsOpenedByClicking) {
      this.closeDropdownByClicking();
    } else {
      this.openDropdownByClicking();
    }
  }

  getLanguageFontColor(language: string): object {
    const fontColor = this.translate.currentLang === language ? 'var(--mainColorB)' : 'white';
    return { 'color': fontColor };
  }


}
