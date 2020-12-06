import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sim-infos',
  templateUrl: './sim-infos.component.html',
  styleUrls: ['./sim-infos.component.scss'],
})
export class SimInfosComponent implements OnInit {
  showRealisation = true;
  showScenariste = false;
  showMontage = false;
  showFormation = false;

  videos = [
    {
      img: 'concert',
      link: 'https://www.youtube.com/embed/szpyom1umLM',
      category: 'Montage',
      title: 'Festival "Le Printemps des Notes"',
    },
    {
      img: 'appel',
      link: 'https://www.youtube.com/embed/z73FiYt1puU',
      category: 'Court-métrage',
      title: `L'Appel`,
    },
    {
      img: 'les-limbes-affiche',
      link: 'https://www.youtube.com/embed/0WzARG9cn8w',
      category: 'Court-métrage',
      title: 'Les Limbes',
    },
  ];

  constructor() {}

  ngOnInit() {}

  goOnRealisation() {
    this.showRealisation = true;
    this.showScenariste = false;
    this.showMontage = false;
    this.showFormation = false;
  }

  goOnScenariste() {
    this.showRealisation = false;
    this.showScenariste = true;
    this.showMontage = false;
    this.showFormation = false;
  }

  goOnMontage() {
    this.showRealisation = false;
    this.showScenariste = false;
    this.showMontage = true;
    this.showFormation = false;
  }

  goOnFormation() {
    this.showRealisation = false;
    this.showScenariste = false;
    this.showMontage = false;
    this.showFormation = true;
  }
}
