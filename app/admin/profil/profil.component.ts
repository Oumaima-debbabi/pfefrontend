import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  currentUser: Admin;
  constructor(private userS:UserService) { }

  ngOnInit() {

    //this.loggedUser = JSON.parse(localStorage.getItem('User'));
    this.currentUser = this.userS.currentUserValue;

  }

}
