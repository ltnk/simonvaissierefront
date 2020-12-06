import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sim-header',
  templateUrl: './sim-header.component.html',
  styleUrls: ['./sim-header.component.scss'],
})
export class SimHeaderComponent implements OnInit {
  projectsClicked = false;

  constructor() {}

  ngOnInit() {}

  goToProject() {
    this.projectsClicked = true;
  }
}
