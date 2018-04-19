import { Component, OnInit } from '@angular/core';
import { Author } from './../author';
import { Book } from './../../book/book';
import { ActivatedRoute } from '@angular/router';
import { AuthorService } from "../../services/AuthorService";
import { BookService } from "../../services/BookService";

@Component({
    selector: 'author-detail',
    templateUrl: './author-detail.component.html'
})
export class AuthorDetailComponent implements OnInit {
    author:Author = null;
    books:Book[] = null;
    loaded:Boolean = false;

    constructor(
        private _route:ActivatedRoute,
        private _authorService:AuthorService,
        private _bookService:BookService) {
            this._authorService = _authorService;
            this._bookService = _bookService;
    }

    ngOnInit() {
        this._authorService.getAuthorByUsername(this._route.snapshot.paramMap.get('username'))
            .subscribe(
                (data:Author)=>{
                        this.author=data;
                        this._bookService.getBooksByUsername(this.author.username.toLowerCase())
                            .subscribe(
                                (data:Book[])=>{
                                        this.books=data;
                                        this.loaded=true;
                                        },
                                (error)=>alert(error.message)
                            );
                        },
                (error)=>alert(error.message)
            );
    }

}
