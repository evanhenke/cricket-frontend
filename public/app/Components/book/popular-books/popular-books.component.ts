import { Component, OnInit } from '@angular/core';
import { Book } from '../../../Classes/Book';
import { BookService } from "../../../Services/BookService";

@Component({
    selector:'app-popular-books',
    templateUrl:'./popular-books.component.html'
})
export class PopularBooksComponent implements OnInit {
    imageSize:number=300;
    books:Book[];
    _bookService:BookService;
    newestBooks:Book[];

    constructor (
        _bookService:BookService
    ) {
        this._bookService = _bookService;
    }

    ngOnInit(){
        this._bookService.getAllBooks()
            .subscribe((books:Book[]) => {
                this.books = books;
                this.newestBooks = this.getNewestBooks(3);
            },
                error => console.log(error)
            );
    }

    getNewestBooks (num:number):Book[] {
        return this.books.sort((a,b) => { return this.compare(a.createDate,b.createDate); });
    }

    compare (a:Date,b:Date): number {
        if(a > b){
            return 1;
        } else if (a < b) {
            return -1;
        }
        return 0;
    }
}
