import { Component } from '@angular/core';
import * as AOS from 'aos';
// import AOS from 'aos';
import { TranslateService } from '@ngx-translate/core';
import { DropdownService } from './services/dropdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public translate: TranslateService, public dropdown: DropdownService) { }

  ngOnInit(): void {
    AOS.init(
      {
        once: true
      }
    );

    this.translate.currentLang = 'en';
  }
}
