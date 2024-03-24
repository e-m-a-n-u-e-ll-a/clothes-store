import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main-content/main/main.component';
import {HttpClientModule} from '@angular/common/http';
import { ClothesListComponent } from './main-content/clothes-list/clothes-list.component'
import { UserModule } from './user/user.module';
import { MainContentModule } from './main-content/main-content.module';
import { ErrorComponent } from './error/error.component';
import { CreateComponent } from './create/create.component';
import { AppEmailDirective } from './user/app-email.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClothesListComponent,
    ErrorComponent,
    CreateComponent,
   
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    MainContentModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
