import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {
  tiles = [
    { text: 'Text 1', image: 'https://via.placeholder.com/150' },
    { text: 'Text 2', image: 'https://via.placeholder.com/150' },
    { text: 'Text 3', image: 'https://via.placeholder.com/150' },
    { text: 'Text 4', image: 'https://via.placeholder.com/150' },
    { text: 'Text 5', image: 'https://via.placeholder.com/150' },
    { text: 'Text 6', image: 'https://via.placeholder.com/150' }
  ];
}
