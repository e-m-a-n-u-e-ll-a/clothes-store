import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private api: ApiService, private router: Router) {

  }
  createPost(form: NgForm) {
    if(form.invalid){
      return;
    }

    this.router.navigate(['/catalog'])
  }


}
