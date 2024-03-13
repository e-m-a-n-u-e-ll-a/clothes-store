import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';

const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'catalog', component: ClothesListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainContentRoutingModule { }
