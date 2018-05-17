import { NgModule } from '@angular/core';

import { SelectABookComponent } from '../Components/writer/SelectABook.component';
import { SharedModule } from "./shared.module";
import { WritingRoutingModule } from "./routing/wrinting-routing.module";

@NgModule({
    imports:[
        SharedModule,
        WritingRoutingModule
    ],
    declarations:[
        SelectABookComponent
    ],
    exports:[]
})
export class WritingModule {}
