import { Component } from '@angular/core';
import { ProjectListService } from '../project-list.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(public projectListService: ProjectListService) { }
}
