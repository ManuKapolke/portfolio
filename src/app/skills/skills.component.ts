import { Component } from '@angular/core';
import { LayoutService } from '../services/layout.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', icon: 'html.png' },
    { name: 'CSS', icon: 'css.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'TypeScript', icon: 'typescript.png' },
    { name: 'Angular', icon: 'angular.png' },
    { name: 'C++', icon: 'icons8-c++.svg' },
    { name: 'Python', icon: 'python.png' },
    { name: 'GIT', icon: 'git.png' },
    { name: 'Rest-API', icon: 'api.png' },
    { name: 'Firebase', icon: 'firebase.png' },
    { name: 'Bootstrap', icon: 'bootstrap.svg' },
    { name: 'Material Design', icon: 'material.png' },
    { name: 'SCRUM', icon: 'scrum.png' }
  ];

  constructor(public layoutService: LayoutService) { }

  fadeDirection(index: number): string {
    return index % 2 === 0 ? 'left' : 'right';
  }
}
