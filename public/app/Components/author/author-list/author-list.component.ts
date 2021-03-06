import { Component, OnInit } from '@angular/core';
import { Author } from '../../../Classes/Author';
import { AuthorService } from '../../../Services/AuthorService';
import { PaginationService } from "../../../Services/PaginationService";


@Component({
    selector:'app-author-list',
    templateUrl:'./author-list.component.html'
})
export class AuthorListComponent implements OnInit {
    allAuthors: Author[];
    filteredAuthors: Author[];

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
        if(pageNumber<1 || (pageNumber > this.pager.totalPages && this.pager.totalPages > 0)){
            return;
        }
        this.pager = this._paginationService.getPageSetup(this.filteredAuthors, pageNumber);
        this.pagedItems = this.pager.singlePageOfItems;
    }
}
