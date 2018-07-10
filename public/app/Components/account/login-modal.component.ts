import { Component } from '@angular/core';

@Component({
    selector:'app-login-modal',
    templateUrl:'./login-modal.component.html'
})
export class LoginModalComponent {
    username: String;
    rawPassword: String;
}
