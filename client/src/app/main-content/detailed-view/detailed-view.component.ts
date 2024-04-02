import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Detailed } from 'src/app/types/garment';
import { UsererService } from 'src/app/user/user.service';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent {
  showEdit: boolean = false;

  garment: Detailed = {
    model: 'Пола',
    img: 'https://cdn1.focus.bg/bazar/db/pics/dbe8ede653eab25c492ac395f2eeec56.jpg',
    color: 'зелен',
    price: '17',
    gender: 'жена',
    size: 'С',
    description: 'карирана пола с детайли'
  }
  form = this.fb.group({
    model: ['Пола', [Validators.required]],
    img: ['https://cdn1.focus.bg/bazar/db/pics/dbe8ede653eab25c492ac395f2eeec56.jpg', [Validators.required]],
    color: ['зелен', [Validators.required]],
    price: ['17', [Validators.required, Validators.min(0)]],
    gender: ['жена', [Validators.required]],
    size: ['С', [Validators.required]],
    description: ['карирана пола с детайли', [Validators.required, Validators.minLength(10)]]
  })
  toggleEditForm() {
    this.showEdit = true;
  }
  get isLogged(): boolean {
    return this.userService.isLoggedIn
  }
  save(): void {
    if (this.form.invalid) {
      return
    }
    this.garment = this.form.value as Detailed;
    this.showEdit = false;
  }
  constructor(private fb: FormBuilder, private userService: UsererService) {

  }
}
