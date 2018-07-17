import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../Services/AuthenticationService';
import { Author } from '../Classes/Author';

@Injectable()
export class LoggedInGuard implements CanActivate {
    author: Author;

    constructor(
        private _authenticationService: AuthenticationService,
        private _router: Router
    ) {
        this._authenticationService = _authenticationService;
        this._router = _router;
        this._authenticationService.auth.subscribe((data) => { this.author = data; });
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        if (this._authenticationService.isLoggedIn) {
            return true;
        }
        alert('Not allowed, bub.');
        this._router.navigate(['/home']);
        return false;
    }
}