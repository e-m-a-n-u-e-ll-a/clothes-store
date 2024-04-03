import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsererService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage = ''
  constructor(private userService: UsererService, private router: Router) { }
  login(form: NgForm) {
    // console.log(form.value);
    if (form.invalid) {
      return;
    }
    const { email, password } = form.value;
    this.userService.login(email, password).subscribe({

      next: () => {
        this.router.navigate(['/catalog']);
      },
      error: (err) => {
        console.log(err)
        this.errorMessage = 'No such user :)'
      }
    });
  }
}
