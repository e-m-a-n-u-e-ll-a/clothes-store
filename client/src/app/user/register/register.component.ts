import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../utils/email-validator';
import { matchPasswords } from '../utils/password-validator';
import { UsererService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(['.bg', '.com'])]],
    passGroup: this.fb.group({ password: ['', [Validators.required, Validators.minLength(7)]], rePass: ['', [Validators.required]] },
      { validators: [matchPasswords('password', 'rePass')] })
  })
  constructor(private fb: FormBuilder, private userService: UsererService, private router: Router) {
  }
  register(): void {
    if (this.form.invalid) {
      return
    }
    let { email, passGroup: { password, rePass } = {} } = this.form.value
    this.userService.register(email!, password!, rePass!).subscribe({
      next: () => {
        this.router.navigate(['/catalog'])
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
