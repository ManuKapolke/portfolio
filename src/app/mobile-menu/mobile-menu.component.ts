import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent {
  constructor(public overlayService: OverlayService) { }
}
