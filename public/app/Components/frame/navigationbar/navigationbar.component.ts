import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../Services/AuthenticationService';
import { Author } from '../../../Classes/Author';

@Component({
    selector:'app-navigationbar',
    templateUrl:'./navigationbar.component.html'
})
export class NavigationBarComponent implements OnInit {
    appTitle: string = "Cricket";
    loggedIn: Boolean = false;
    author: Author = null;
    _authenticationService;

    constructor(
        _authenticationService:AuthenticationService
    ) {
        this._authenticationService = _authenticationService;
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
    };
}
