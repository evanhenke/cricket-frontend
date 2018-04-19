import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Author } from './../author/author';
import { Book } from './../book/book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookService{
    bookEndpoint:string = "https://cricket-backend.herokuapp.com/api/book/";

    constructor(private _http: HttpClient) { }

    getAllBooks(): Observable<Book[]> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.get<Book[]>(this.bookEndpoint)
            .do(data=>console.log('data is ' + JSON.stringify(data)))
            .catch((error)=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    getBooksByUsername(str: String): Observable<Book[]> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.get<Book[]>(this.bookEndpoint+str)
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