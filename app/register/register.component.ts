import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Secteur } from '../secteur/model/secteur';
import { AssociationService } from '../association/services/association.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SecteurService } from '../secteur/services/secteur.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nom_association:string = '';
  email:string='';
  //emailasso:string=''
  password:string='';
secteurId:'';
name:string='';
prenom:string='';
adresse:string='';
numero_association:string='';
code_postal:string='';
date_creation:string='';
//adresse_asso :string='';
profession:string='';
//annee_naissance:string='';
numero_telephone:string='';
//civilite:string='';

formDirty:boolean=false;
imageUrl:string='';
registrationForm = new FormGroup({
  nom_association: new FormControl("", [Validators.required,Validators.minLength(2),
    Validators.maxLength(30),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
  email: new FormControl("", [Validators.required,Validators.minLength(3),
  Validators.maxLength(100)]),
  password: new FormControl("", [Validators.required]),
secteurId: new FormControl("", [Validators.required]),
name: new FormControl("", [Validators.required,Validators.minLength(2),
Validators.maxLength(30),
Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
prenom: new FormControl("", [Validators.required,Validators.minLength(2),
  Validators.maxLength(30),
  Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
adresse: new FormControl("", [Validators.required]),
numero_association: new FormControl("", [Validators.required]),
profession: new FormControl("", [Validators.required]),
numero_telephone: new FormControl("", [Validators.required]),
code_postal: new FormControl("", [Validators.required]),
date_creation: new FormControl("", [Validators.required]),
imageUrl:new FormControl("", [Validators.required]),
});
secteurs$: Observable<Secteur[]>;
constructor(private associationService:AssociationService,
  private secteurService:SecteurService) {}

secteur1:any;
ngOnInit() {
  this.secteurs$ = this.secteurService.getSecteurs();

}

addPost(): void {
  const data = {
    nom_association:this.nom_association,
    email:this.email,
    //emailasso:this.emailasso,
    password:this.password,
  secteurId:this.secteurId,
  name:this.name,
  imageUrl: this.imageUrl,
  prenom:this.prenom,
adresse:this.adresse,
numero_association:this.numero_association,
code_postal:this.code_postal,
date_creation:this.date_creation,
//adresse_asso:this.adresse_asso,
profession:this.profession,
//annee_naissance:this.annee_naissance,
numero_telephone:this.numero_telephone,
//civilite:this.civilite,
  }

  this.associationService.registration(data)
    .subscribe(() => {

      this.nom_association= '';
      this.email='';
      //this.emailasso=''
      this.password='';
      this.secteurId='';
      //this.name='';
      this.prenom='';
      this.adresse='';
      this.numero_association='';
      this.code_postal='';
      this.date_creation='';
      //this.adresse_asso='';
      this.profession='';
      //this.annee_naissance='';
  this.numero_telephone='';
  //this.civilite='';


    this.imageUrl='';
    this.formDirty = false;

            })
}




uploadImage(event) {
  this.associationService.uploadImage(event.target.files[0])
    .subscribe((res: any) => {
      this.imageUrl = res.imageUrl
    })
}
handleChange() {
  this.formDirty = true;
}


}

