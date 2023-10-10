import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public layoutService: LayoutService) { }
}
