import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', icon: 'angular.png' },
    { name: 'Rest-API', icon: 'api.png' },
    { name: 'Bootstrap', icon: 'bootstrap.svg' },
    { name: 'CSS', icon: 'css.png' },
    { name: 'Firebase', icon: 'firebase.png' },
    { name: 'GIT', icon: 'git.png' },
    { name: 'HTML', icon: 'html.png' },
    { name: 'JavaScript', icon: 'javascript.png' },
    { name: 'Material Design', icon: 'material.png' },
    { name: 'SCRUM', icon: 'scrum.png' },
    { name: 'TypeScript', icon: 'typescript.png' },
    { name: 'C++', icon: 'icons8-c++.svg' },
    { name: 'Python', icon: 'python.png' }
  ];

  constructor(public layoutService: LayoutService) { }
}
