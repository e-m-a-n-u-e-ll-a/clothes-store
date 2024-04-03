import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CreateComponent } from './create/create.component';
import { AuthActivate } from './guards/auth.activate';

const routes: Routes = [
  {path: 'create', component: CreateComponent, canActivate:[AuthActivate]},
  {path : '**', redirectTo:'/404'},
  {path: '404', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
