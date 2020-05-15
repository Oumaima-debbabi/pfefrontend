import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { Association } from 'src/app/association/model/association';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-benevole',
  templateUrl: './benevole.component.html',
  styleUrls: ['./benevole.component.css']
})
export class BenevoleComponent implements OnInit {

  benevoleForm = new FormGroup({
    name: new FormControl("", [Validators.required,Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
    email: new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(100)]),
    password: new FormControl("",[]),
    prenom: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    numero_telephone: new FormControl("", [Validators.required]),
    code_postal: new FormControl("", [Validators.required]),
    date_naissance: new FormControl("", [Validators.required]),
    profession: new FormControl("", [Validators.required]),
    association: new FormControl("", [Validators.required]),
    civilite : new FormControl("", [Validators.required]),

  });
associations$: Observable<Association[]>

  constructor(private benevoleService:AdminService,
  private aService:AdminService,
  private router:Router) {}


  ngOnInit() {
    this.associations$ =this.aService.getAssociations()
  }

  benevoleadd() {
    if (this.benevoleForm.valid) {
      this.benevoleService.addBenevole(this.benevoleForm.value).subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: true,
          timer: 3000
        });
        Toast.fire({
          title:'Benevole ajouté avec succées!!'

        })
      this.router.navigate(["association/login"]);
      });
    }
  }
}

