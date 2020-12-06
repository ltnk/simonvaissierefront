import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sim-projects-montage',
  templateUrl: './sim-projects-montage.component.html',
  styleUrls: ['./sim-projects-montage.component.scss'],
})
export class SimProjectsMontageComponent implements OnInit {
  videos = [
    {
      img: 'pellicule',
      link: 'https://www.youtube.com/embed/SP8dmklEfFc',
      category: 'Montage',
      title: 'La Pellicule et le Numérique',
    },
    {
      img: 'concert',
      link: 'https://www.youtube.com/embed/szpyom1umLM',
      category: 'Montage',
      title: `Le Printemps des notes`,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
