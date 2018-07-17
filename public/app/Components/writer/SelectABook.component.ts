import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../Services/AuthorService';
import { Author } from '../../Classes/Author';
import { BookService } from '../../Services/BookService';
import { Book } from '../../Classes/Book';
import { AuthenticationService } from '../../Services/AuthenticationService';

@Component({
    selector:'app-select-a-book',
    templateUrl:'./SelectABook.component.html'
})
export class SelectABookComponent implements OnInit {
    loaded: boolean = false;
    author: Author = null;
    books:Book[];
    currentBookTitle: string;

    constructor(
        private _authorService: AuthorService,
        private _bookService: BookService,
        private _authenticationService: AuthenticationService
    ){
        this._authorService = _authorService;
        this._bookService = _bookService;
        this._authenticationService = _authenticationService;
    }

    ngOnInit(){
        this._authenticationService.auth.subscribe((author) => {
            this.author = author;
            this._bookService.getBooksByUsername(author.username).subscribe((books) => {
                this.books = books;
                this.loaded = true;
            })
        });
    }
}
