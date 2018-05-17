import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SelectABookComponent } from "../../Components/writer/SelectABook.component";

const routes:Routes = [
    {path: '',redirectTo:'/home',pathMatch:'full'},
    {path: 'selectabook', component: SelectABookComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class WritingRoutingModule {}
