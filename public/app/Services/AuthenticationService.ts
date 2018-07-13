import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Author } from '../Classes/Author';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {
    authEndpoint:string = "http://localhost:3030/api/auth/login";
    logOutEndpoint:string = "http://localhost:3030/api/auth/logout";
    author:Author = null;

    constructor(private _http: HttpClient) {
        this._http = _http;
    }

    login(username:string, password:string): Observable<Author> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.post<Author>(this.authEndpoint,
            {
                username:username,
                password:password
            })
            .do((data) => {
                this.author = data;
            })
            .catch((error)=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    logOut(): Observable<Author> {
        if (this.author != null) {
            // noinspection TypeScriptUnresolvedFunction
            return this._http.post<Author>(this.logOutEndpoint, this.author)
                .do(() => {
                    this.author = null;
                })
                .catch((error)=>{
                    this.handleError(error);
                    return Observable.throw(error.statusText);
                });
        }
    }

    private handleError(error:HttpErrorResponse) {
        alert("handleError in authentication service says: " + error.message);
    }
}
