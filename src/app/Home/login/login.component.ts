import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../Shared/app.service';
import { AuthService } from '../../Shared/auth.service';
import { user } from '../../Shared/models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user!: user;
  errorMessage: string = '';

  constructor(
    private apiService: ApiService, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.user = { username: '', password: ''};
  }

  login(): void {
    this.apiService.authenticateUser(this.user).subscribe(
      (authUser: user) => {
        this.authService.setUser(authUser);
        this.router.navigate(['/dashboard']);
      },
      error => {
        if (error.status === 404) {
          this.errorMessage = 'Username or Password is incorrect';
        }
        else {
          this.errorMessage = 'An unexpected error occured';
        }
      }
    )
  }

  navigateToSignUp(): void {
    this.router.navigate(['/signup']);
  }
}
