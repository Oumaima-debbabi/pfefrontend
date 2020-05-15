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

  associationregistration() {
    if (this.registrationForm.valid) {
      this.associationService.registration(this.registrationForm.value).subscribe(res => {
        this.registrationForm.reset();
        //this.flashMessage.show('You are now registrationed and can now login', {cssClass: 'alert-success', timeout: 3000});

        //this.router.navigate(["association/login"]);
      });
    }

  }

}

