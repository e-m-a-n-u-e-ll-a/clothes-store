import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/types/user';
import { UsererService } from 'src/app/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  get isLogged(): boolean {
    if(this.userService.isLoggedForNavbar){

      return true
    }else{
      return false
    }
  }
 get userId(): string | undefined{
  return this.userService.getUserId()
 }
  constructor(private userService: UsererService, private router: Router) { }
  logout() {
    this.userService.logout().subscribe({
      next: () => this.router.navigate(['/'])
    }
    )
  }
}
