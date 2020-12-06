import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'simon-vaissiere';
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyByOUunz4Tl6qJJUG5-0R01-v5ZmO5wbNE',
      authDomain: 'simon-aed0f.firebaseapp.com',
      databaseURL: 'https://simon-aed0f.firebaseio.com',
      projectId: 'simon-aed0f',
      storageBucket: 'simon-aed0f.appspot.com',
      messagingSenderId: '365778379787',
      appId: '1:365778379787:web:b56090448c6dd8ab8b530e',
      measurementId: 'G-LHQL6ZVWNN',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
