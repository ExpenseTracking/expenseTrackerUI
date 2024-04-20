import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../Shared/auth.service';
import { ApiService } from '../../Shared/app.service';
import { user } from '../../Shared/models';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    user$: Observable<user | null>;
    user: user | null = null;
    sidebarActive: boolean = false;

    constructor(public authService: AuthService, private apiService: ApiService, private router: Router) {
        // assign observable
        this.user$ = this.authService.getUser();

        // subscribe to this observable
        this.user$.subscribe((userChanges: user | null) => {
            this.user = userChanges;
        });
    }

    toggleSidebar() {
        this.sidebarActive = !this.sidebarActive;
    }

    signout(){
        this.authService.logout();
        this.sidebarActive= !this.sidebarActive;
    }

    deleteAccount(){
        this.apiService.deleteUser(this.user.userId)
        .subscribe(
            (response) => {
                // Handle successful deletion, if needed
            },
        );
        this.signout();
    }
}
