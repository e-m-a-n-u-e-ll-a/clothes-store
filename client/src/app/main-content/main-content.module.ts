import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainContentRoutingModule } from './main-content-routing.module';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';



@NgModule({
  declarations: [
    DetailedViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MainContentRoutingModule
  ]
})
export class MainContentModule { }
