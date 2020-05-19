import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/service/user.service';
import { Admin } from '../model/admin';
import { Router } from '@angular/router';
import {Role} from '../model/role'
@Component({
  selector: 'app-liste-dash',
  templateUrl: './liste-dash.component.html',
  styleUrls: ['./liste-dash.component.css']
})
export class ListeDashComponent implements OnInit {

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
  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
}
  ngOnInit() {
  }

}
