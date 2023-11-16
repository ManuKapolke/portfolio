import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-section-about-me',
  templateUrl: './section-about-me.component.html',
  styleUrls: ['./section-about-me.component.scss']
})
export class SectionAboutMeComponent {

  constructor(public layoutService: LayoutService) { }
}
