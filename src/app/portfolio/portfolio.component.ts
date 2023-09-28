import { Component } from '@angular/core';
import { ProjectListService } from '../project-list.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(
    public layoutService: LayoutService,
    public projectListService: ProjectListService) { }
}
