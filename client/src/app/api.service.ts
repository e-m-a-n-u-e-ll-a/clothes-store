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
}
