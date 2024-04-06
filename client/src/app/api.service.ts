import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Grament } from './types/garment';
import { Comment } from './types/comment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  getClothes() {
    const api = 'http://localhost:3001/data/catalog';
    return this.http.get<Grament[]>(api);

  }
  createPost(data: Partial<Grament>): Observable<Grament> {
    const api = 'http://localhost:3001/data/create';
    const token = localStorage.getItem('accessToken');

    const headers = new HttpHeaders().set('X-Authorization', `${token}`);
    const options = { headers };

    return this.http.post<Grament>(api, data, options)
  }
  getPost(_id: string) {
    const api = `http://localhost:3001/data/catalog/${_id}`;

    return this.http.get<Grament>(api);
  }
  editPost(_id: string, data: Partial<Grament>) {
    const api = `http://localhost:3001/data/catalog/${_id}/edit`
    return this.http.put<Grament>(api, data)
  }
  deletePost(_id: string){
   const api = `http://localhost:3001/data/catalog/${_id}/delete`;
   return this.http.delete<Grament>(api)
  }
  addComment(_id: string, data: Partial<Comment>){
    const api = `http://localhost:3001/data/catalog/${_id}/comments`;
    return this.http.post<Comment>(api, data)
  }
  getPostsComments(id:string){
    const api = `http://localhost:3001/data/catalog/${id}/comments`;
    return this.http.get<Comment[]>(api)
  }
}
