import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sim-home',
  templateUrl: './sim-home.component.html',
  styleUrls: ['./sim-home.component.scss'],
})
export class SimHomeComponent implements OnInit {
  slideshowOne = 'limbes.jpg';
  slideshowTwo = 'stage.jpg';

  slides = [
    {
      id: 0,
      img: 'limbes.jpg',
      title: `"Les Limbes"`,
    },
    {
      id: 1,
      img: 'stage.jpg',
      title: `"Le Printemps des notes"`,
    },
  ];

  slideIndex = 0;

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

  constructor() {
    setInterval(() => {
      this.goToNextSlide();
    }, 5000);
  }

  ngOnInit() {}

  goToPreviousSlide() {
    if (this.slideIndex > 0) {
      this.slideIndex -= 1;
    } else {
      this.slideIndex = this.slides.length - 1;
    }
  }

  goToNextSlide() {
    if (this.slideIndex < this.slides.length - 1) {
      this.slideIndex += 1;
    } else if (this.slideIndex === this.slides.length - 1) {
      this.slideIndex = 0;
    }
  }

  goSee(slideId) {
    this.slideIndex = slideId;
  }
}
