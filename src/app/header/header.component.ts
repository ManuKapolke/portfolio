import { Component, ViewChild } from '@angular/core';
import { OverlayService } from '../services/overlay.service';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { DropdownService } from '../services/dropdown.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    public layoutService: LayoutService,
    public overlayService: OverlayService,
    public translate: TranslateService,
    public dropdown: DropdownService
  ) { }

  translateToLanguage(language: 'en' | 'de'): void {
    this.translate.use(language)
    this.dropdown.closeOnClick();
  }
}
