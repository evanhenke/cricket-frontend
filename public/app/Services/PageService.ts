import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Author } from '../Classes/Author';
import { Book } from '../Classes/Book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Page} from "../Classes/Page";

@Injectable()
export class PageService{
    bookEndpoint:string = "https://cricket-backend.herokuapp.com/api/book/";

    constructor(private _http: HttpClient) { }

    getPages(str: String): Observable<Page[]> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.get<Page[]>(this.bookEndpoint+str+"/pages")
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