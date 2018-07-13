import { Component } from '@angular/core';
import { AuthenticationService } from '../../Services/AuthenticationService';
import { Author } from '../../Classes/Author';

@Component({
    selector:'app-login-modal',
    templateUrl:'./login-modal.component.html'
})
export class LoginModalComponent {
    username:string;
    password:string;
    author:Author = null;
    loginError:Boolean = false;

    constructor(
        private _authenticationService:AuthenticationService
    ) {
        this._authenticationService = _authenticationService;
    }

    login() {
        if (this.isValidCredential(this.username) && this.isValidCredential(this.password)) {
            this._authenticationService.login(this.username,this.password)
                .subscribe((userdata) => {
                    this.author = userdata;
                    this.loginError = false;

                }, (error) => {
                    console.log('uh oh!  login error in component! ' + error.message);
                    this.loginError = true;
                    this.author = null;
                })
        } else {
            this.loginError = true;
        }
    }

    isValidCredential(cred:string): boolean {
        return cred!=null && cred!="" && cred!=undefined;
    }
}
