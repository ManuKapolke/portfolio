import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-above-the-fold',
  templateUrl: './above-the-fold.component.html',
  styleUrls: ['./above-the-fold.component.scss']
})
export class AboveTheFoldComponent {
  public subTitle: string[] = Array.from('FRONTEND DEVELOPER');

  constructor(public layoutService: LayoutService) { }
}
