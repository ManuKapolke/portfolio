import { Component } from '@angular/core';
import { OverlayService } from '../services/overlay.service';

@Component({
  selector: 'app-sending-screen',
  templateUrl: './sending-screen.component.html',
  styleUrls: ['./sending-screen.component.scss']
})
export class SendingScreenComponent {

  constructor(public overlayService: OverlayService) { }

  get sending() {
    return this.overlayService.sending;
  }

  get messageIsSent() {
    return this.overlayService.messageIsSent;
  }


}
