import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // @ViewChild('toggleBurgerMenu') toggleBurgerMenu?: HTMLInputElement;

  isChecked: boolean = false;
  scrollTop: number = 0;

  toggleBodyOverflow() {
    if (this.isChecked) {
      this.closeMobileMenu();
    } else {
      this.scrollTop = document.documentElement.scrollTop;
      document.body.style.setProperty('--scrollTop', -(this.scrollTop) + "px");
      document.body.classList.add('no-scrolling');
      this.isChecked = true;
    }
  }

  closeMobileMenu() {
    document.body.classList.remove('no-scrolling');
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.scrollTop = this.scrollTop;
    document.documentElement.style.scrollBehavior = 'smooth';
    this.isChecked = false;
  }
}
