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

  getFontSizeByLanguage(): object {
    let fontSize: string;
    let letterSpacing: string;
    if (window.innerWidth < 500) {
      fontSize = this.translate.currentLang === 'de' ? 'clamp(12px, 4vw, 20px)' :
        'clamp(16px, 6vw, 34px)';
      letterSpacing = this.translate.currentLang === 'de' ? 'clamp(0px, 0.04vw, 1px)' :
        'clamp(1.5px, 0.5vw, 2.5px)';
    } else {
      fontSize = this.translate.currentLang === 'de' ? 'clamp(24px, 2vw, 36px)' :
        'clamp(34px, 3vw, 50px)';
      letterSpacing = this.translate.currentLang === 'de' ? 'clamp(0px, 0.04vw, 1px)' :
        'clamp(2.5px, 0.24vw, 4px)';
    }
    return { 'font-size': fontSize, 'letter-spacing': letterSpacing };
  }
}
