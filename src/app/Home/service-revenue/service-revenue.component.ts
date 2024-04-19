import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { user } from '../../Shared/models';
import { AuthService } from '../../Shared/auth.service';

@Component({
    selector: 'app-service-revenue',
    templateUrl: './service-revenue.component.html',
    styleUrl: './service-revenue.component.css'
})
export class ServiceRevenueComponent implements OnInit {
    user$: Observable<user | null>;
    user: user | null = null;

    constructor(private authService: AuthService) { }

    ngOnInit(): void {
        // assign observable
        this.user$ = this.authService.getUser();

        // subscribe to this observable
        this.user$.subscribe((userChanges: user | null) => {
            this.user = userChanges;
        });
    }
}
