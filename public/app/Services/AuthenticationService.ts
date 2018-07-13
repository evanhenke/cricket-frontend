import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Author } from '../Classes/Author';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthenticationService {
    authEndpoint:string = "https://cricket-backend.herokuapp.com/api/auth/login";
    logOutEndpoint:string = "https://cricket-backend.herokuapp.com/api/auth/logout";
    author:Author = null;
    private source = new BehaviorSubject(this.author);
    auth = this.source.asObservable();

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
                this.source.next(this.author);
            })
            .catch((error)=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    logOut(): Observable<Author> {
        if (this.author == null) {
            // noinspection TypeScriptUnresolvedFunction
            return this._http.post<Author>(this.logOutEndpoint, this.author)
                .do(() => {
                    this.author = null;
                    this.source.next(this.author);
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
