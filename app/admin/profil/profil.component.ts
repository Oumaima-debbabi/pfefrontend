import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';
import { UserService } from 'src/app/user/service/user.service';
import { Observable } from 'rxjs';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  id: string;
  currentUser: Admin;
  user$:Observable<Admin[]>
  constructor(private userS:UserService,
  private  usr:AdminService) { }

  ngOnInit() {

    //this.loggedUser = JSON.parse(localStorage.getItem('User'));
    this.currentUser = this.userS.currentUserValue;

  }

}
