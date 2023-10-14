import { Component, Input } from '@angular/core';
import { Project } from '../interfaces/project.interface';
import { ProjectListService } from '../services/project-list.service';
import { ResponsivenessService } from '../services/responsiveness.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: Project;
  projectIndex: number = -1;

  constructor(
    public projectListService: ProjectListService,
    public responsiveService: ResponsivenessService
  ) { }

  ngOnInit() {
    this.projectIndex = this.projectListService.projects.indexOf(this.project);
  }

  isReversed(): boolean {
    const projectIndexIsOdd = this.projectIndex % 2 === 1;
    return this.responsiveService.mobileViewIsOn() ? false : projectIndexIsOdd;
  }

  getStyleForTextContainer(): object {
    const textAlign = this.responsiveService.mobileViewIsOn() ? 'center' :
      (this.isReversed() ? 'right' : 'left');
    return { 'text-align': textAlign };
  }

  getStyleForButtons(): object {
    const justifyContent = this.isReversed() ? 'flex-end' : 'flex-start';
    return { 'justify-content': justifyContent };
  }

  getStyleForImgPhoneContainer(): object {
    const left = this.isReversed() ? 'unset' : '0';
    const right = this.isReversed() ? '0' : 'unset';
    const justifyContent = this.isReversed() ? 'flex-end' : 'flex-start';
    return {
      'left': left,
      'right': right,
      'justify-content': justifyContent
    };
  }
}
