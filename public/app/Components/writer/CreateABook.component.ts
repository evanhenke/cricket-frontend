import { Component, OnInit } from "@angular/core";
import { BookService } from "../../Services/BookService";
import { AuthorService } from "../../Services/AuthorService";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector:'app-create-a-book',
    templateUrl:'./CreateABook.component.html'
})
export class CreateABookComponent implements OnInit {
    _bookTitle:string;
    authorUsername:string;

    constructor(
        private _bookService:BookService,
        private _authorService:AuthorService,
        private _route:ActivatedRoute
    ){
        this._bookService = _bookService;
        this._authorService = _authorService;
        this._route = _route;
    }

    get bookTitle(){ return this._bookTitle; }
    set bookTitle(title:string){
        this._bookTitle = title;
    }

    ngOnInit() {
        this.authorUsername = this._route.snapshot.paramMap.get('username');
    }

    createBook(){
        console.log("WOAH!!");
        if(this.bookTitle!="" || this._bookTitle!=null || this._bookTitle!=undefined)
            this._bookService.createNewBook(this.bookTitle,this.authorUsername)
                .subscribe(book=>{
                    console.log('NEW BOOK! with id ' + book._id);
                },error=>{
                console.log('uh oh, there was an error! ' + error);
                });
        else console.log('title is not valid');
    }
}