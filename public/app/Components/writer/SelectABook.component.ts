import {Component, OnInit} from '@angular/core';
import {AuthorService} from "../../Services/AuthorService";
import {Author} from "../../Classes/Author";
import {BookService} from "../../Services/BookService";
import {Book} from "../../Classes/Book";

@Component({
    selector:'app-select-a-book',
    templateUrl:'./SelectABook.component.html'
})
export class SelectABookComponent implements OnInit {
    loaded:Boolean = false;
    authorOk:Boolean = false;
    currentAuthor:Author = null;
    authors:Author[];
    books:Book[];
    booksOk:Boolean = false;
    currentBook:Book = null;
    bookOk:Boolean = false;

    constructor(
        private _authorService: AuthorService,
        private _bookService: BookService){
        this._authorService = _authorService;
        this._bookService = _bookService;
    }

    ngOnInit(){
        this._authorService.getAllAuthors()
            .subscribe(authors =>{
                this.loaded = true;
                this.authors = authors;
            }, error => console.log(error));
    }

    get authorUsername(): string  { if(this.currentAuthor!=null) return this.currentAuthor.username; }
    set authorUsername(username:string) {
        this._authorService.getAuthorByUsername(username)
            .subscribe(author=>{
                this.currentAuthor = author;
                this.authorOk = true;
                this._bookService.getBooksByUsername(username)
                    .subscribe(books=>{
                        this.books = books;
                        this.booksOk = books.length>0 ? true : false;
                    },error=>{
                        console.log(error)
                        this.books = null;
                        this.booksOk = false;
                    });
            },error => {
                console.log(error);
                this.authorOk = false;
                this.currentAuthor = null;
            });
    }

    get currentBookTitle():String { if(this.currentBook!=null) return this.currentBook.title; }
    set currentBookTitle(bookTitle:String) {
        if(this.booksOk)
            this.books.forEach(book => {
                if(book.title === bookTitle){
                    this.currentBook=book;
                }
            })
    }
}
