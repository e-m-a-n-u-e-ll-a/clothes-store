import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Grament } from '../../types/garment';

@Component({
  selector: 'app-clothes-list',
  templateUrl: './clothes-list.component.html',
  styleUrls: ['./clothes-list.component.css']
})
export class ClothesListComponent implements OnInit {
  clothes: Grament[] = [];
  constructor(private api: ApiService) {

  }
  ngOnInit(): void {
    this.api.getClothes().subscribe(clothes => {
      this.clothes = clothes
    })
  }
}
