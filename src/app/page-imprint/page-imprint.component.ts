import { Component } from '@angular/core';

@Component({
  selector: 'app-page-imprint',
  templateUrl: './page-imprint.component.html',
  styleUrls: ['./page-imprint.component.scss']
})
export class PageImprintComponent {
  ngAfterViewInit(): void {
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = 'smooth';
  }
}
