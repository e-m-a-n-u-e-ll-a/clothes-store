import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsererService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get isLogged(): boolean {
    return this.userService.isLoggedIn
  }
  constructor(private userService: UsererService, private router: Router) { }
  logout() {
    this.userService.logout().subscribe({
      next: ()=> this.router.navigate(['/'])
    }
     )
  }
}
