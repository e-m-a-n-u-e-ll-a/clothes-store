import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Grament } from '../types/garment';

@Injectable({
  providedIn: 'root'
})
export class UsererService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  user: User | undefined;
  userSub: Subscription

  currentUser: any;

  get isLoggedIn(): boolean {
    // console.log(this.user);
    return !!this.user
  }
  get isGuest() {
    let token = this.getToken();
   // console.log(token)
    return token
  }
  get isLoggedForNavbar() {
    let token = this.getToken();
    //console.log(token)
    return token
  }

  getUserId(): string | undefined {
    return this.user?._id;
  }
  getUsereEmail(): string | undefined {
    return this.user?.email;
  }



  constructor(private http: HttpClient, private router: Router) {
    this.userSub = this.user$.subscribe(user => {
      this.user = user;
    })
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.currentUser = jwt_decode(token);

    }
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/users/login', { email, password })
      .pipe(
        tap((response: any) => {
          const token = response.accessToken;
          this.setToken(token);
        }),
        (tap((user) => this.user$$.next(user)))
      );
  }

  setToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
  register(email: string, password: string, rePass: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/users/register', { email, password, rePass })
      .pipe(
        tap((response: any) => {
         // console.log(response)
          const token = response.accessToken;
          this.setToken(token.token);
        }),
        (tap((user) => this.user$$.next(user)))
      )
  }
  logout() {
    return this.http.get('http://localhost:3001/users/logout', {}).pipe(
      tap((user) => this.user$$.next(undefined)),
      tap(() => {
        this.removeToken();
        this.router.navigate(['/'])
      }))
      ;
  }
  getGarmentsByUserId(): Observable<User> {
    const userId = this.getUserId()
    const url = `http://localhost:3001/users/${userId}/myposts`;
    const token = this.getToken();
    const headers = new HttpHeaders({
      'X-Authorization': token !== null ? token : ''
    });
    return this.http.get<User>(url, { headers });
  }

  private removeToken(): void {
    localStorage.removeItem('accessToken');
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  getCurrentUser(): Observable<User | undefined> {
    return this.user$

  };
}


function jwt_decode(token: string): any {
  const payload = token.split('.')[1];
  const decodedPayload = atob(payload);
  return JSON.parse(decodedPayload);
}

