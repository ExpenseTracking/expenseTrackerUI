import { Component } from '@angular/core';

import { AuthService } from '../../Shared/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    isAuthorizedUser: boolean;

    constructor(private authService: AuthService) {
        this.isAuthorizedUser = authService.isAuthenticated();
    }

}
