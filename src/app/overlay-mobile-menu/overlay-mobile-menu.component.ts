import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-overlay-mobile-menu',
  templateUrl: './overlay-mobile-menu.component.html',
  styleUrls: ['./overlay-mobile-menu.component.scss']
})
export class OverlayMobileMenuComponent {
  constructor(public overlayService: OverlayService) { }
}
