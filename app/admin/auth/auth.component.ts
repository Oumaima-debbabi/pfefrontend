import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  currentUser: Admin;

  constructor(
      private router: Router,
      private authenticationService: UserService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
      this.authenticationService.logOut();
      this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
