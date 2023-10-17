import { Component, ViewChild } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public overlayService: OverlayService) { }
}
