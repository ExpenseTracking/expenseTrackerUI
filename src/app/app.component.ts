import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'expenseTrackerUI';
  showNavbar: boolean = true;
  showFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd) {
        this.showNavbar = !this.router.url.includes('/login') && !this.router.url.includes('/signup');
        this.showFooter = !this.router.url.includes('/login') && !this.router.url.includes('/signup');
      }
    })
  }
}
