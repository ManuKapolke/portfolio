import { Component } from '@angular/core';
import { ProjectListService } from '../../services/project-list.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-section-portfolio',
  templateUrl: './section-portfolio.component.html',
  styleUrls: ['./section-portfolio.component.scss']
})
export class SectionPortfolioComponent {
  constructor(
    public layout: LayoutService,
    public projectListService: ProjectListService
  ) { }
}
