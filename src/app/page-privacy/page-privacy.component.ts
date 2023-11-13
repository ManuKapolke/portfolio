import { Component } from '@angular/core';

@Component({
  selector: 'app-page-privacy',
  templateUrl: './page-privacy.component.html',
  styleUrls: ['./page-privacy.component.scss']
})
export class PagePrivacyComponent {
  ngAfterViewInit(): void {
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = 'smooth';
  }
}
