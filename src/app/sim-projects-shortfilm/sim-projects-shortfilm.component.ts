import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sim-projects-shortfilm',
  templateUrl: './sim-projects-shortfilm.component.html',
  styleUrls: ['./sim-projects-shortfilm.component.scss'],
})
export class SimProjectsShortfilmComponent implements OnInit {
  videos = [
    {
      img: 'appel',
      link: 'https://www.youtube.com/embed/z73FiYt1puU',
      category: 'Court-métrage',
      title: `L'Appel`,
      description: `Une production Alaiclic - Réalisé par Simon Vaissière`,
    },
    {
      img: 'les-limbes-affiche',
      link: 'https://www.youtube.com/embed/0WzARG9cn8w',
      category: 'Court-métrage',
      title: 'Les Limbes',
      description: `Acteurs : Simon Vaissière - Calixte Vaissière. Images et son : Bernard
      Pech - Louis Pedrola - Vang - Chloé Vaissière. Musiques : Ray Charles
      - What'd I say ; 2046 Secret Garden`,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
