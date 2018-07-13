import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './Modules/routing/app-routing.module';
import { ReadingModule } from "./Modules/reading.module";
import { WritingModule } from "./Modules/writing.module";
import { SharedModule } from "./Modules/shared.module";

import { AppComponent } from './app.component';
import { HomeComponent } from "./Components/home/home.component";
import { NavigationBarComponent } from "./Components/frame/navigationbar/navigationbar.component";
import { FooterComponent } from "./Components/frame/footer/footer.component";
import { LoginModalComponent } from './Components/account/login-modal.component';

import { AuthorService } from './Services/AuthorService';
import { PaginationService } from './Services/PaginationService';
import { BookService } from "./Services/BookService";
import { AuthenticationService } from './Services/AuthenticationService';

@NgModule({
    imports:[
        BrowserModule,
        HttpClientModule,
        ReadingModule,
        WritingModule,
        SharedModule,
        AppRoutingModule
    ],
    declarations:[
        AppComponent,
        HomeComponent,
        NavigationBarComponent,
        FooterComponent,
        LoginModalComponent
    ],
    providers:[
        AuthorService,
        PaginationService,
        BookService,
        AuthenticationService
    ],
    bootstrap:[AppComponent]
})
export class AppModule { }
