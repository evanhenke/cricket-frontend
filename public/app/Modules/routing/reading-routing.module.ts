import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ReaderComponent } from "../../Components/reader/reader.component";
import { AuthorDetailComponent } from "../../Components/author/author-detail/author-detail.component";



const routes:Routes = [
    {path: 'reader', component: ReaderComponent},
    {path: 'author/:username', component: AuthorDetailComponent}
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class ReadingRoutingModule {}
