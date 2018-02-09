import { Component, OnInit } from '@angular/core';
import { Author } from './../author';
import { Observable } from 'rxjs/Observable';

import { AuthorService } from './../../services/AuthorService';
import { PaginationService } from "../../services/PaginationService";


@Component({
    selector:'app-author-list',
    templateUrl:'./author-list.component.html'
})
export class AuthorListComponent implements OnInit {
    allAuthors: Author[];
    filteredAuthors: Author[];
    currentPageOfAuthors: Author[];

    _listFilter: string;
    pager: any = {};
    pagedItems = [];

    get listFilter(): string  { return this._listFilter; }
    set listFilter(str:string) {
        this._listFilter = str;
        this.filteredAuthors =
            this._listFilter ? this.performFilter(this._listFilter) : this.allAuthors;
        this.setPage(1);
    }

    constructor(
        private _authorService: AuthorService,
        private _paginationService: PaginationService
    ) {
        this._authorService = _authorService;
        this._paginationService = _paginationService;
    }

    ngOnInit() {
        this._authorService.getAllAuthors()
        .subscribe(
            (authors:Author[])=>{
                this.allAuthors = authors;
                this.filteredAuthors = authors;
                this.setPage(1);
            },
            error=>console.log(error.message)
        );
    }

    performFilter(filterBy:string): Author[] {
        filterBy = filterBy.toLowerCase();
        return this.allAuthors.filter((author:Author) =>
            author.username.toLowerCase().indexOf(filterBy) !== -1);
    }

    setPage(pageNumber:number){
        if(pageNumber<1 || pageNumber > this.pager.totalPages){
            return;
        }
        this.pager = this._paginationService.getPageSetup(this.filteredAuthors, pageNumber);
        this.pagedItems = this.pager.singlePageOfItems;
    }
}
