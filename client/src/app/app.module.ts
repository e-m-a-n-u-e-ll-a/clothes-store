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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ClothesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    UserModule,
    MainContentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
