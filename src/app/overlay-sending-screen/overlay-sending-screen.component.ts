import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-overlay-sending-screen',
  templateUrl: './overlay-sending-screen.component.html',
  styleUrls: ['./overlay-sending-screen.component.scss']
})
export class OverlaySendingScreenComponent {

  constructor(public overlayService: OverlayService) { }

  get sending() {
    return this.overlayService.sending;
  }

  get messageIsSent() {
    return this.overlayService.messageIsSent;
  }


}
