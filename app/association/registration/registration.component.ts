import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormControl, NgForm } from "@angular/forms";
import { AssociationService } from '../services/association.service';
import { Observable } from 'rxjs';
import { Secteur } from 'src/app/secteur/model/secteur';
import { SecteurService } from 'src/app/secteur/services/secteur.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    nom_association= '';
    email='';
    emailasso=''
    password='';
  secteur='';
  name='';
  prenom='';
adresse='';
numero_association='';
code_postal='';
date_creation='';
adresse_asso='';
profession='';
annee_naissance='';
numero_telephone='';
civilite='';

  formDirty:boolean=false;
  imageUrl:'';
  registrationForm = new FormGroup({
    nom_association: new FormControl("", [Validators.required,Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
    email: new FormControl("", [Validators.required,Validators.minLength(3),
    Validators.maxLength(100)]),
    password: new FormControl("", [Validators.required]),
  secteur: new FormControl("", [Validators.required]),
  name: new FormControl("", [Validators.required,Validators.minLength(2),
  Validators.maxLength(30),
  Validators.pattern('[a-zA-Z0-9_-\\s]*')]),

adresse: new FormControl("", [Validators.required]),
numero_association: new FormControl("", [Validators.required]),
code_postal: new FormControl("", [Validators.required]),
date_creation: new FormControl("", [Validators.required]),

  });
  secteurs$: Observable<Secteur[]>;
  constructor(private associationService:AssociationService,
    private secteurService:SecteurService) {}


  ngOnInit() {
    this.secteurs$ = this.secteurService.getSecteurs();

  }

  addPost(): void {
    const data = {
      nom_association:this.nom_association,
      email:this.email,
      emailasso:this.emailasso,
      password:this.password,
    secteur:this.secteur,
    name:this.name,
    prenom:this.prenom,
  adresse:this.adresse,
  numero_association:this.numero_association,
  code_postal:this.code_postal,
  date_creation:this.date_creation,
  adresse_asso:this.adresse_asso,
  profession:this.profession,
  annee_naissance:this.annee_naissance,
  numero_telephone:this.numero_telephone,
  civilite:this.civilite,
    }

    this.associationService.registration(data)
      .subscribe(() => {

        this.nom_association= '';
        this.email='';
        this.emailasso=''
        this.password='';
        this.secteur='';
        this.name='';
        this.prenom='';
        this.adresse='';
        this.numero_association='';
        this.code_postal='';
        this.date_creation='';
        this.adresse_asso='';
        this.profession='';
        this.annee_naissance='';
    this.numero_telephone='';
    this.civilite='';

    this.formDirty = false;
      this.imageUrl='';

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

