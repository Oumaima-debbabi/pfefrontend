import { Component, OnInit } from '@angular/core';
import { SecteurService } from 'src/app/secteur/services/secteur.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { AdminService } from '../services/admin.service';
import { Admin } from '../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-secteur',
  templateUrl: './secteur.component.html',
  styleUrls: ['./secteur.component.css']
})
export class SecteurComponent implements OnInit {
  currentUser:Admin
secteurForm= new FormGroup({
  type_activite: new FormControl("",[Validators.required])
});

  constructor(private secteurService:AdminService,
             private route:Router,
             private useS:UserService,
    )
 {}

  ngOnInit() {
    this.currentUser=this.useS.currentUserValue;
  }


  newSecteur() {
    if (this.secteurForm.valid) {
      this.secteurService.addSecteur(this.secteurForm.value).subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: true,
          timer: 3000
        });
        Toast.fire({
    title:'Secetur ajouté'

        })
        this.secteurForm.reset();

      });
    }
  }

  }



