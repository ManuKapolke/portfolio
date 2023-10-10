import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

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
      img: 'assets/img/projects/laptop_join.png',
      imgPhone: 'assets/img/projects/smartphone_join.png'
    },
    {
      name: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      description: 'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and salsa to fight against a psycho chicken.',
      url: 'https://manu-kapolke.developerakademie.net/el_pollo_loco',
      githubUrl: 'https://github.com/ManuKapolke/el_pollo_loco',
      img: 'assets/img/projects/laptop_el-pollo-loco.png',
      imgPhone: 'assets/img/projects/smartphone_el-pollo-loco.png'
    },
    // {
    //   name: 'Simple CRM',
    //   techStack: 'Angular | TypeScript | HTML | CSS | Firebase',
    //   description: 'A very Simple Customer Relationship Management system working with CRUD functionality.',
    //   url: '#',
    //   githubUrl: '#',
    //   img: 'assets/img/projects/laptop_simple-crm_figma.png',
    //   imgPhone: 'assets/img/projects/smartphone_join.png'
    // },
    {
      name: 'Pokédex',
      techStack: 'JavaScript | HTML | CSS | API',
      description: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      url: 'https://manu-kapolke.developerakademie.net/pokedex',
      githubUrl: 'https://github.com/ManuKapolke/pokedex',
      img: 'assets/img/projects/laptop_pokedex.png',
      imgPhone: 'assets/img/projects/smartphone_pokedex.png'
    }
  ];

  constructor() { }
}
