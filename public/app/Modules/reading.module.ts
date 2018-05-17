import { NgModule } from '@angular/core';
import { SharedModule } from "./shared.module";

import { ReaderComponent } from '../Components/reader/reader.component';
import { AuthorDetailComponent } from '../Components/author/author-detail/author-detail.component';
import { ReadingRoutingModule } from "./routing/reading-routing.module";
import { PopularBooksComponent } from "../Components/book/popular-books/popular-books.component";
import { AuthorListComponent } from "../Components/author/author-list/author-list.component";

@NgModule({
    imports:[
        SharedModule,
        ReadingRoutingModule
    ],
    declarations:[
        ReaderComponent,
        AuthorDetailComponent,
        PopularBooksComponent,
        AuthorListComponent
    ],
    exports:[],
    providers:[]
})
export class ReadingModule {}
