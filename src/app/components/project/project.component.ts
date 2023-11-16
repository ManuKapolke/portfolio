import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project.interface';
import { ProjectListService } from '../../services/project-list.service';
import { ResponsivenessService } from '../../services/responsiveness.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  @Input() project!: Project;
  private projectIndex: number = -1;

  constructor(
    public translate: TranslateService,
    private projectListService: ProjectListService,
    private responsiveService: ResponsivenessService
  ) { }

  ngOnInit() {
    this.projectIndex = this.projectListService.projects.indexOf(this.project);
  }

  getProjectDescription(): string {
    return this.translate.currentLang === 'de' ? this.project.descriptionDE : this.project.descriptionEN;
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
