import { Component, OnInit } from "@angular/core";
import { BookService } from "../../Services/BookService";
import { AuthorService } from "../../Services/AuthorService";
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../Services/AuthenticationService';
import { Author } from '../../Classes/Author';

@Component({
    selector:'app-create-a-book',
    templateUrl:'./CreateABook.component.html'
})
export class CreateABookComponent implements OnInit {
    bookTitle:string;
    author:Author = null;

    constructor(
        private _bookService:BookService,
        private _authorService:AuthorService,
        private _route:ActivatedRoute,
        private _authenticationService: AuthenticationService,
        private _router: Router
    ){
        this._bookService = _bookService;
        this._authorService = _authorService;
        this._route = _route;
        this._authenticationService = _authenticationService;
        this._router = _router;
    }

    ngOnInit() {
        this._authenticationService.auth.subscribe((author) => {
            this.author = author;
        })
    }

    createBook(){
        if(this.bookTitle!="" || this.bookTitle!=null || this.bookTitle!=undefined) {
            this._bookService.createNewBook(this.bookTitle, this.author._id)
                .subscribe(book => {
                    console.log('NEW BOOK! with id ' + book._id);
                    //this._router.navigate(['/editor']);
                }, error => {
                    console.log('uh oh, there was an error! ' + error);
                });
        } else {
            console.log('title is not valid');
        }
    }
}