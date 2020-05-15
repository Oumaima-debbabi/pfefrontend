import { Component, OnInit } from '@angular/core';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  loggedUser:Admin;

  constructor() { }

  ngOnInit() {

    this.loggedUser = JSON.parse(localStorage.getItem('Admin'));
  }

}
