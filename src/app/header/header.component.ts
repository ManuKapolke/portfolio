import { Component, ViewChild } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public overlayService: OverlayService, public translate: TranslateService) { }

  translateToLanguage(language: 'en' | 'de'): void {
    this.translate.use(language)
    // console.log(this.translate.currentLang);

  }
}
