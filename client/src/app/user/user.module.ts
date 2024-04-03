import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserRoutingModule } from './user-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppEmailDirective } from './app-email.directive';
import { UsererService } from './user.service';
import { MainComponent } from '../main-content/main/main.component';
import { ProfileComponent } from './profile/profile.component';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AppEmailDirective,
    ProfileComponent
  ],
  providers: [UsererService],
  imports: [
    CommonModule, UserRoutingModule, RouterModule, FormsModule, ReactiveFormsModule,
  ]
})
export class UserModule { }
