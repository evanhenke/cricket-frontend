import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Author } from '../Classes/Author';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthorService {
    userEndpoint:string = "https://cricket-backend.herokuapp.com/api/user/";

    constructor(private _http: HttpClient) { }

    getAllAuthors(): Observable<Author[]> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.get<Author[]>(this.userEndpoint)
            .do(data=>console.log('data is ' + JSON.stringify(data)))
            .catch((error)=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    getAuthorByUsername(str: String): Observable<Author> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.get<Author>(this.userEndpoint+str)
            .do(data=>console.log('data is ' + JSON.stringify(data)))
            .catch((error)=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    private handleError(error:HttpErrorResponse) {
        alert("handleError in author service says: " + error.message);
    }
}