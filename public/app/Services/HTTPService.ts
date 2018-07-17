import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';

@Injectable()
export class HTTPService {

    constructor(
        private _http: HttpClient
    ) {
        this._http = _http;
    }

    get<T>(uri:string): Observable<T> {
        return this._http.get<T>(uri);
    }

    post<T>(uri:string,body:object): Observable<T> {
        return this._http.post<T>(uri,body);
    }

    put<T>(uri:string,body:object): Observable<T> {
        return this._http.put<T>(uri,body);
    }

    delete<T>(uri:string, body:object): Observable<T> {
        return this.request<T>('delete',uri,body);
    }

    private request<T>(type:string,uri:string,body:object): Observable<T> {
        return this._http.request<T>(type,uri,body);
    }
}
