import { Component } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-section-skills',
  templateUrl: './section-skills.component.html',
  styleUrls: ['./section-skills.component.scss']
})
export class SectionSkillsComponent {
  public skills = [
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'TypeScript', icon: 'typescript.png' },
    { name: 'Angular', icon: 'angular.png' },
    { name: 'HTML', icon: 'html.png' },
    { name: 'CSS', icon: 'css.png' },
    { name: 'Sass/SCSS', icon: 'sass.svg' },
    { name: 'C++', icon: 'icons8-c++.svg' },
    { name: 'Python', icon: 'python.png' },
    { name: 'GIT', icon: 'git.png' },
    { name: 'Rest-API', icon: 'api.png' },
    { name: 'Firebase', icon: 'firebase.png' },
    { name: 'Bootstrap', icon: 'bootstrap.svg' },
    { name: 'Material Design', icon: 'material.png' },
    { name: 'Figma', icon: 'figma.svg' },
    { name: 'WordPress', icon: 'wp.png' },
    { name: 'SCRUM', icon: 'scrum.png' }
  ];

  constructor(public layout: LayoutService) { }
}