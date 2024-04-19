import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../Shared/auth.service';
import { user } from '../../Shared/models';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    user$: Observable<user | null>;
    user: user | null = null;

    constructor(public authService: AuthService) {
        // assign observable
        this.user$ = this.authService.getUser();

        // subscribe to this observable
        this.user$.subscribe((userChanges: user | null) => {
            this.user = userChanges;
        });
    }

}
