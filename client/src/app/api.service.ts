import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grament } from './types/garment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getClothes() {
    const api = 'http://localhost:3001/data/catalog';
    return this.http.get<Grament[]>(api);

  }
  createPost(
    model: string,
    img: string,
    color: string,
    price: string,
    type: string,
    size: string,
    description: string,) {
    const api = 'http://localhost:3001/data/create';
    let payload = {
      model,
      img,
      color,
      price,
      type,
      size,
      description
    }
    return this.http.post<Grament>(api, payload);
  }
}
