import { Injectable } from '@angular/core';
import { Project } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectListService {
  public projects: Project[] = [
    {
      name: 'Join',
      techStack: 'JavaScript | HTML | CSS',
      descriptionEN: 'Task manager inspired by the Kanban System. Create and organize tasks using drag-and-drop functions, assign users and categories.',
      descriptionDE: 'Vom Kanban-System inspirierter Task-Manager. Erstellen und organisieren Sie Aufgaben mit Hilfe von Drag-and-Drop-Funktionen, weisen Sie Benutzer und Kategorien zu.',
      url: 'https://join.manukapolke.de',
      githubUrl: 'https://github.com/ManuKapolke/join',
      img: 'assets/img/projects/laptop_join.png',
      imgPhone: 'assets/img/projects/smartphone_join.png'
    },
    {
      name: 'El Pollo Loco',
      techStack: 'JavaScript | HTML | CSS',
      descriptionEN: 'Jump-and-run game, implemented with object-oriented programming. Help Pepe find coins and salsa to defeat a freaked-out giant chicken.',
      descriptionDE: 'Jump-and-Run-Spiel, umgesetzt mit objektorientierter Programmierung. Hilf Pepe, Münzen und Salsa zu finden, um ein durchgedrehtes Riesenhuhn zu besiegen.',
      url: 'https://el-pollo-loco.manukapolke.de',
      githubUrl: 'https://github.com/ManuKapolke/el_pollo_loco',
      img: 'assets/img/projects/laptop_el-pollo-loco.png',
      imgPhone: 'assets/img/projects/smartphone_el-pollo-loco.png'
    },
    {
      name: 'Portfolio Website',
      techStack: 'Angular | TypeScript | HTML | CSS',
      descriptionEN: 'My personal website presenting various programming projects. Get a first impression of me and my skills.',
      descriptionDE: 'Meine persönliche Website, auf der ich verschiedene Programmierprojekte vorstelle. Verschaffen Sie sich einen ersten Eindruck von mir und meinen Fähigkeiten.',
      url: '#',
      githubUrl: 'https://github.com/ManuKapolke/portfolio',
      img: 'assets/img/projects/laptop_portfolio.png',
      imgPhone: 'assets/img/projects/smartphone_portfolio.png'
    },
    {
      name: 'Pokédex',
      techStack: 'JavaScript | HTML | CSS | API | Bootstrap',
      descriptionEN: 'Based on the PokéAPI, a simple library that provides and catalogues Pokémon information.',
      descriptionDE: 'Basiert auf der PokéAPI, einer einfachen Library, die Pokémon-Informationen bereitstellt und katalogisiert.',
      url: 'https://pokedex.manukapolke.de',
      githubUrl: 'https://github.com/ManuKapolke/pokedex',
      img: 'assets/img/projects/laptop_pokedex.png',
      imgPhone: 'assets/img/projects/smartphone_pokedex.png'
    }
  ];

  constructor() { }
}
