import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  mobileMenuIsOpen: boolean = false;
  scrollTop: number = 0;

  toggleMobileMenu() {
    if (this.mobileMenuIsOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.freezeBody();
    this.mobileMenuIsOpen = true;
  }

  closeMobileMenu() {
    this.unfreezeBody();
    this.mobileMenuIsOpen = false;
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
}
