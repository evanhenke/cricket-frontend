import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../Services/AuthenticationService';
import { Author } from '../Classes/Author';

@Injectable()
export class CorrectUserGuard implements CanActivate {
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
        let username = next.url[1].path;
        if (this._authenticationService.author != null && username == this._authenticationService.author.username) {
            return true;
        }
        alert('Not allowed, bub.');
        this._router.navigate(['/home']);
        return false;
    }
}