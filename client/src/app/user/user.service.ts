import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsererService implements OnDestroy {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();
  user: User | undefined;
  keyforUser = '[user]';
  userSub: Subscription
  get isLoggedIn(): boolean {
    console.log(this.user);
    return !!this.user
  }
  constructor(private http: HttpClient, private router: Router) {
    this.userSub = this.user$.subscribe(user => {
      this.user = user
    })

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
  register(email: string, password: string, rePass: string): Observable<any> {
    return this.http.post<any>('http://localhost:3001/users/register', { email, password, rePass })
      .pipe(
        tap((response: any) => {
          const token = response.accessToken;
          this.setToken(token);
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

  private removeToken(): void {
    localStorage.removeItem('accessToken');
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
