import { Component } from '@angular/core';
import { AuthenticationService } from '../../../Services/AuthenticationService';
import { Author } from '../../../Classes/Author';

@Component({
    selector:'app-navigationbar',
    templateUrl:'./navigationbar.component.html'
})
export class NavigationBarComponent {
    appTitle: string = "Cricket";
    loggedIn: Boolean = false;
    author: Author = null;
    _authenticationService;

    constructor(_authenticationService:AuthenticationService) {
        this._authenticationService = _authenticationService;
        this.author = this._authenticationService.author;
        if (this.author != null) {
            this.loggedIn = true;
        }
    }

    logOut(){
        this._authenticationService.logOut()
            .subscribe(() => {
                this.author = null;
                this.loggedIn = false;
            }, (error) => {
                console.log(`error logging out: ${error.statusText}`);
            })
    };
}
