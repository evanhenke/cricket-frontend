 import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Book } from '../Classes/Book';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class BookService{
    bookEndpoint:string = "https://cricket-backend.herokuapp.com/api/book/";
    bookAuthEndpoint:string = "https://cricket-backend.herokuapp.com/api/auth/book/";

    constructor(private _http: HttpClient) {
        this._http = _http;
    }

    getAllBooks(): Observable<Book[]> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.get<Book[]>(this.bookEndpoint)
            .do((data)=>{ console.log(`data is ${JSON.stringify(data)}`); })
            .catch((error)=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    getBooksByUsername(str: String): Observable<Book[]> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.get<Book[]>(this.bookEndpoint+str)
            .do((data)=>{ console.log(`data is ${JSON.stringify(data)}`); })
            .catch((error)=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    createNewBook(title: String, authorId:String): Observable<Book> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.post(this.bookAuthEndpoint,{
            authorId:authorId,
            title:title
        })
            .do((data)=>{ console.log(`data is ${JSON.stringify(data)}`); })
            .catch(error=>{
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    updateBook(book: Book): Observable<Book> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.put(this.bookAuthEndpoint,book)
            .do((data) => { console.log(`data is ${JSON.stringify(data)}`); })
            .catch((error) => {
                this.handleError(error);
                return Observable.throw(error.statusText);
            });
    }

    deleteBook(book: Book): Observable<Book> {
        // noinspection TypeScriptUnresolvedFunction
        return this._http.request('delete',this.bookAuthEndpoint,{ body: book })
            .do((data) => { console.log(`data is ${JSON.stringify(data)}`); })
            .catch((error) => {
                this.handleError(error);
                return Observable.throw(error.statusText);
            })
    }

    private handleError(error:HttpErrorResponse) {
        alert("handleError in author service says: " + error.message);
    }
}