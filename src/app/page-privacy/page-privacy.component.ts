import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-page-privacy',
  templateUrl: './page-privacy.component.html',
  styleUrls: ['./page-privacy.component.scss']
})
export class PagePrivacyComponent {

  constructor(public translate: TranslateService) { }

  ngAfterViewInit(): void {
    document.documentElement.style.scrollBehavior = 'auto';
    document.documentElement.scrollTop = 0;
    document.documentElement.style.scrollBehavior = 'smooth';
  }
}
