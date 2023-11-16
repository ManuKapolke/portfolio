import { Component } from '@angular/core';
import * as AOS from 'aos';
// import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    AOS.init(
      {
        once: true
      }
    );

    this.translate.currentLang = 'en';
  }
}
