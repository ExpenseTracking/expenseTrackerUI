import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../Shared/auth.service';

@Component({
  selector: 'app-company-navbar',
  templateUrl: './company-navbar.component.html',
  styleUrl: './company-navbar.component.css'
})

export class CompanyNavbarComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}
  
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/companyHome']);
  }
}
