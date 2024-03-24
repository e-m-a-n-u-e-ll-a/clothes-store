import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { emailValidator } from '../utils/email-validator';
import { matchPasswords } from '../utils/password-validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ['', [Validators.required, emailValidator(['.bg', '.com'])]],
    passGroup: this.fb.group({ password: ['', [Validators.required]], rePass: ['', [Validators.required]] }, 
    { validators: [matchPasswords('password', 'rePass')] })
  })
  constructor(private fb: FormBuilder) {
  }
}
