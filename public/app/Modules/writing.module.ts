import { NgModule } from '@angular/core';

import { SelectABookComponent } from '../Components/writer/SelectABook.component';
import { SharedModule } from "./shared.module";
import { WritingRoutingModule } from "./routing/wrinting-routing.module";
import { CreateABookComponent } from "../Components/writer/CreateABook.component";

@NgModule({
    imports:[
        SharedModule,
        WritingRoutingModule
    ],
    declarations:[
        SelectABookComponent,
        CreateABookComponent
    ],
    exports:[]
})
export class WritingModule {}
