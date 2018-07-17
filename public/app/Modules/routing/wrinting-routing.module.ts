import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SelectABookComponent } from "../../Components/writer/SelectABook.component";
import { CreateABookComponent } from "../../Components/writer/CreateABook.component";
import { LoggedInGuard } from '../../Guards/LoggedInGuard';
import { CorrectUserGuard } from '../../Guards/CorrectUserGuard';

const routes:Routes = [
    {path: 'selectabook', canActivate: [ LoggedInGuard ], component: SelectABookComponent},
    {path: 'createabook/:username', canActivate: [ LoggedInGuard, CorrectUserGuard ], component: CreateABookComponent},
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class WritingRoutingModule {}
