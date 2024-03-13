import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'catalog',
    children: [
      { path: '', pathMatch: 'full', component: ClothesListComponent },
      { path: ':garmentId', component: DetailedViewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule { }
