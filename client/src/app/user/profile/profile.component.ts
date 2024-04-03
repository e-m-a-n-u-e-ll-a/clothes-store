import { Component, OnInit } from '@angular/core';
import { Grament } from 'src/app/types/garment';
import { User } from 'src/app/types/user';
import { UsererService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User = { _id: '', email: '', password: '', posts: [] };
  email = this.userService.getUsereEmail();

  constructor(private userService: UsererService) { }

  ngOnInit(): void {
    this.userService.getGarmentsByUserId().subscribe({
      next: (user: User) => {
        this.user = user;
      }

    });

  }
}

