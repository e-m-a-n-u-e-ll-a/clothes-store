import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(private api: ApiService, private router: Router) {

  }
  createPost(ev: Event, model: string, img: string, color: string, price: string, gender: string, size: string, description: string) {
    ev.preventDefault();
    this.api.createPost(model, img, color, price, gender, size, description).subscribe((data) => {
      console.log(data);
    })
    this.router.navigate(['/catalog'])
  }
}
