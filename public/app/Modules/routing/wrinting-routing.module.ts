import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SelectABookComponent } from "../../Components/writer/SelectABook.component";
import { CreateABookComponent } from "../../Components/writer/CreateABook.component";

const routes:Routes = [
    {path: 'selectabook', component: SelectABookComponent},
    {path: 'createabook/:username', component: CreateABookComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class WritingRoutingModule {}
