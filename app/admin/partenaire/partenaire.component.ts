import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user/service/user.service';
import { Admin } from '../model/admin';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  currentUser:Admin
  partenaireForm= new FormGroup({

    imageUrl: new FormControl("",[Validators.required]),
    nom: new FormControl("",[Validators.required]),
    //nombre_preson: new FormControl("",[Validators.required]),


  });
  imageUrl:string='';
nom:string='';
formDirty:boolean=false;
    constructor(private partenaireService:AdminService,
               private route:Router,private userS:UserService
      )
   {}
   uploadImage(event) {
    this.partenaireService.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.imageUrl = res.imageUrl
      })
  }
    ngOnInit() {
      this.currentUser = this.userS.currentUserValue;
    }

    addPost(): void {
      const data = {
        imageUrl: this.imageUrl,
        nom: this.nom,
              }

      this.partenaireService.addPartenaire(data)
        .subscribe(() => {
          this.nom='';
          this.imageUrl = '';
          this.formDirty = false;
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            timer: 3000
          });
          Toast.fire({
            title:'partenaire ajouté avec succées!!'
          })
        this.route.navigate(["admin/table-partenaire"]);
        })

    }

    handleChange() {
      this.formDirty = true;
    }

    }
