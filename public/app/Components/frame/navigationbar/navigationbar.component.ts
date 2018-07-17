import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Services/AuthenticationService';
import { Author } from '../../../Classes/Author';
import { Router } from '@angular/router';

@Component({
    selector:'app-navigationbar',
    templateUrl:'./navigationbar.component.html'
})
export class NavigationBarComponent implements OnInit {
    appTitle: string = "Cricket";
    loggedIn: Boolean = false;
    author: Author = null;

    constructor(
        private _authenticationService:AuthenticationService,
        private _router: Router
    ) {
        this._authenticationService = _authenticationService;
        this._router = _router;
    }

    ngOnInit() {
        this._authenticationService.auth.subscribe((author) => {
            this.author = author;
            if (this.author != null) {
                this.loggedIn = true;
            }
        });
    }

    logOut(){
        this._authenticationService.logOut();
        this.author = null;
        this.loggedIn = false;
        this._router.navigate(['/home']);
    };
}
