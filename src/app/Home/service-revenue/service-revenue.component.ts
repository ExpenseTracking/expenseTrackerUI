import { Component } from '@angular/core';

import { user } from '../../Shared/models';
import { AuthService } from '../../Shared/auth.service';

@Component({
    selector: 'app-service-revenue',
    templateUrl: './service-revenue.component.html',
    styleUrl: './service-revenue.component.css'
})
export class ServiceRevenueComponent {
    user: user;

    constructor(private authService: AuthService){
        this.user = authService.getUser();
    }
}
