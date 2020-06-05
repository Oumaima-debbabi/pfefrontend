import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
//import { AssociationService } from 'src/app/association/services/association.service';
import { SecteurService } from 'src/app/secteur/services/secteur.service';
import { Observable } from 'rxjs';
import { Secteur } from 'src/app/secteur/model/secteur';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-association',
  templateUrl: './association.component.html',
  styleUrls: ['./association.component.css']
})
export class AssociationComponent implements OnInit {

associationForm = new FormGroup({
    nom_association: new FormControl("", [Validators.required,Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
    email: new FormControl("", [Validators.required,Validators.minLength(3),
    Validators.maxLength(100)]),
    password: new FormControl(""),
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

  constructor(private associationService:AdminService,
    private secteurService:AdminService) {}


  ngOnInit() {
this.getsecteur()
this.secteurs$=this.secteurService.getSecteurs()
}
  getsecteur(){
    //this.secteurService.getSecteurs().subscribe((secteurs:ISecteur[])=>this.secteurs=this.secteurs);

  }

  associationregistration() {
    if (this.associationForm.valid) {
      this.associationService.registration(this.associationForm.value).subscribe(res => {
        this.associationForm.reset();
        //this.flashMessage.show('You are now registrationed and can now login', {cssClass: 'alert-success', timeout: 3000});

        //this.router.navigate(["association/login"]);
      });
    }

  }

}

