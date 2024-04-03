import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Grament } from '../types/garment';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  garment: Grament = {
    _id: '',
    model: '',
    img: '',
    color: '',
    price: '',
    gender: '',
    size: '',
    description: '',
    comments: [],
    _ownerId: ''
  }

  constructor(private api: ApiService, private router: Router) {

  }
  createPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const data: Partial<Grament> = {
      model: form.value.model,
      img: form.value.img,
      color: form.value.color,
      price: form.value.price,
      gender: form.value.gender,
      size: form.value.size,
      description: form.value.description
    }
    this.api.createPost(data).subscribe({
      next: () => {
              this.router.navigate(['/catalog'])
      }
    })

    this.router.navigate(['/catalog'])
  }


}
