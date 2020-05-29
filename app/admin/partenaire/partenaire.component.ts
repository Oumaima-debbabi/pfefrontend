import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {

  partenaireForm= new FormGroup({

    photo: new FormControl("",[Validators.required]),
    nom: new FormControl("",[Validators.required]),
    //nombre_preson: new FormControl("",[Validators.required]),


  });

    constructor(private partenaireService:AdminService,
               private route:Router
      )
   {}

    ngOnInit() {}

    newPartenaire() {
      // if (this.partenaireForm.valid) {
      //   this.partenaireService.add(this.partenaireForm.value).subscribe(res => {
      //     const Toast = Swal.mixin({
      //       toast: true,
      //       position: 'center',
      //       showConfirmButton: true,
      //       timer: 3000
      //     });
      //     Toast.fire({
      // title:'partenaire ajouté'

      //     })
      //     this.partenaireForm.reset();

      //   });
      // }
    }

    }
