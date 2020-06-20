import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { FormGroup, Validators, FormControl, NgForm } from "@angular/forms";
import { ToastComponent } from 'src/app/toast/toast.component';
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { AdminService } from 'src/app/admin/services/admin.service';
import { Association } from 'src/app/association/model/association';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  benevoleForm = new FormGroup({
    name: new FormControl("", []),
    email: new FormControl("", []),
    password: new FormControl("",[]),
    prenom: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
    numero_telephone: new FormControl("", [Validators.required]),
    code_postal: new FormControl("", [Validators.required]),
    annee_naissance: new FormControl("", [Validators.required]),
    profession: new FormControl("", [Validators.required]),
    associationId: new FormControl("", []),
    civilite : new FormControl("", [Validators.required]),
imageUrl:new FormControl("", [Validators.required]),
  });
  uploadImage(event) {
    this.benevoleService.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.imageUrl = res.imageUrl
      })
  }
  associationId:'';
  email:string='';
  civilite:string=''
  password:string='';
name:string='';
prenom:string='';
adresse:string='';
code_postal:string='';
annee_naissance:string='';
//adresse_asso :string='';
profession:string='';
numero_telephone:string='';
imageUrl:string="";
formDirty:boolean=false;
addPost(): void {
  const data = {
    email:this.email,
associationId:this.associationId,

    civilite:this.civilite,
    password:this.password,
  name:this.name,
  imageUrl: this.imageUrl,
  prenom:this.prenom,
adresse:this.adresse,
code_postal:this.code_postal,
//adresse_asso:this.adresse_asso,
profession:this.profession,
annee_naissance:this.annee_naissance,
numero_telephone:this.numero_telephone,
  }

  this.benevoleService.addBenevole(data)
    .subscribe(() => {

      this.name= '';
      this.email='';
      this.civilite=''
      this.password='';
      this.associationId='';
      this.prenom='';
      this.adresse='';
      this.code_postal='';
      //this.adresse_asso='';
      this.profession='';
      this.annee_naissance='';
  this.numero_telephone='';


    this.imageUrl='';
    this.formDirty = false;
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: true,
      timer: 3000
    });
    Toast.fire({
      title:'Benevole ajouté avec succées!!'

    })
  this.router.navigate(["/login"]);

            }
            )
}
handleChange() {
  this.formDirty = true;
}
associations$: Observable<Association[]>

  constructor(private benevoleService:AdminService,
  private aService:AdminService,
  private router:Router) {}


  ngOnInit() {
    this.associations$ =this.aService.getAssociations()
  }
}
