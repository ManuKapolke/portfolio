import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent {
  public subTitle: string[] = Array.from('FRONTEND DEVELOPER');

  constructor(public layoutService: LayoutService, public translate: TranslateService) {
    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // console.log(event);
      this.setSubTitle(event.lang);
    });

  }

  setSubTitle(language: string): void {
    if (language === 'en') {
      this.subTitle = Array.from('FRONTEND DEVELOPER');
    }
    else if (language === 'de') {
      this.subTitle = Array.from('FRONTEND ENTWICKLER');
    }
  }
}
