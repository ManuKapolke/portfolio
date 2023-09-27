import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  projects: Project[] = [
    {
      name: 'Join',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      url: 'https://manu-kapolke.developerakademie.net/join',
      githubUrl: 'https://github.com/ManuKapolke/join',
      img: 'assets/img/projects/laptop_join.png'
    },
    {
      name: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
      url: 'https://manu-kapolke.developerakademie.net/el_pollo_loco',
      githubUrl: 'https://github.com/ManuKapolke/el_pollo_loco',
      img: 'assets/img/projects/laptop_el-pollo-loco.png'
    },
    {
      name: 'Simple CRM',
      techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
      url: '#',
      githubUrl: '#',
      img: 'assets/img/projects/laptop_simple-crm.png'
    },
    {
      name: 'Pokédex',
      techStack: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      url: 'https://manu-kapolke.developerakademie.net/pokedex',
      githubUrl: 'https://github.com/ManuKapolke/pokedex',
      img: 'assets/img/projects/laptop_pokedex.png'
    }
  ];

  constructor() { }
}
