import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EvenementService } from 'src/app/evenement/services/evenement.service';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Admin } from '../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  currentUser:Admin
  evenementForm= new FormGroup({
    sujet:new FormControl("",[Validators.required]),

    //nombre_preson:new FormControl("",[Validators.required]),

    //besoin: new FormControl("",[Validators.required]),
    //nombre_preson: new FormControl("",[Validators.required]),
    nom_res: new FormControl("",[Validators.required]),
    lieu: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required]),
    contenu:new FormControl("",[Validators.required]),
    nombre_preson:new FormControl("",[Validators.required])

  });

    constructor(private evenmentService:AdminService,
               private route:Router,
               private user:UserService
      )
   {}

    ngOnInit() {

    this.currentUser=this.user.currentUserValue
    }

  newEvenement() {
      if (this.evenementForm.valid) {
        this.evenmentService.addEvenement(this.evenementForm.value).subscribe(res => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            timer: 3000
          });
          Toast.fire({
      title:'evenement ajouté'

          })
          this.evenementForm.reset();

        });
      }
    }

    }
