import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';
import { Association } from 'src/app/association/model/association';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Role } from '../../model/role';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
users:Admin
  user: any = {};
  editForm: FormGroup;
  imageUrl:''
  constructor(private route: ActivatedRoute, private router: Router,
    private bS:AdminService ,private fb: FormBuilder,
    private aService:AdminService) { this.createForm();
    }

  createForm(){ this.editForm= this.fb.group
    ({
      civilite: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      association: new FormControl("",[]),
      email: new FormControl("",[Validators.required]),
      prenom: new FormControl("",[Validators.required]),
      adresse: new FormControl("",[Validators.required]),
      numero_telephone: new FormControl("",[Validators.required]),
      code_postal: new FormControl("",[Validators.required]),
      date_naissance: new FormControl("",[Validators.required]),
      profession :new FormControl("",[Validators.required]),
      imageUrl:new FormControl("",[Validators.required]),

    });
  }

  associations$:Observable<Association[]>
  ngOnInit() {
    this.associations$ =this.aService.getAssociations()

    this.route.params.subscribe(params => {
        this.bS.getUser(params.id).subscribe(res => {
          this.user = res;
      });
    });
  }
  get isAdmin() {
    return this.user && this.user.role === Role.Admin;
}
uploadImage(event) {
  this.bS.uploadImage(event.target.files[0])
    .subscribe((res: any) => {
      this.imageUrl = res.imageUrl
    })
}
  updateUser( name, prenom,profession,association,email, civilite, adresse, code_postal,date_naissance,numero_telephone, imageUrl,id) {
    this.route.params.subscribe(params => {
      this.bS.editUser(name, prenom,profession,association, email,civilite, adresse, code_postal,date_naissance,numero_telephone,imageUrl,params.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'benevole modifié avec succés'

      })
      this.router.navigate(['/admin/profil']);
    });
  }
}

