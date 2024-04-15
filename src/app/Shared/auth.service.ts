import { Injectable } from "@angular/core";

import { user } from './models';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    currUser: user;
 
    constructor() {}

    setUser(user: user): void {
        this.currUser = user;
    }

    getUser(): user {
        return this.currUser;
    }

    isAuthenticated(): boolean {
        return !!this.currUser;
    }
}