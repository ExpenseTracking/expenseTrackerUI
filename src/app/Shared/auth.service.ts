import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";

import { user } from './models';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private currentUserSubject: BehaviorSubject<user | null> = new BehaviorSubject<user | null>(null);
    public currentUser$: Observable<user | null> = this.currentUserSubject.asObservable();
 
    constructor() {}

    setUser(user: user): void {
        this.currentUserSubject.next(user);
    }

    getUser(): Observable<user | null> {
        return this.currentUser$;
    }

    isAuthenticated(): Observable<boolean> {
        return this.currentUser$.pipe(
            map(user => !!user)
        );
    }
}