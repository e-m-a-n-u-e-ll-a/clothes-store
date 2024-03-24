import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppEmailDirective } from './app-email.directive';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppEmailDirective
  ],
  imports: [
    CommonModule, UserRoutingModule, RouterModule, FormsModule, ReactiveFormsModule
  ]
})
export class UserModule { }
