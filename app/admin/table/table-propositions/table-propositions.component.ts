import { Component, OnInit } from '@angular/core';
import { Proposition } from 'src/app/model/propositon';
import { PropositionService } from 'src/app/services/proposition.service';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-table-propositions',
  templateUrl: './table-propositions.component.html',
  styleUrls: ['./table-propositions.component.css']
})
export class TablePropositionsComponent implements OnInit {
  id: string;
  propositions;
  Propositions$: Observable<Proposition[]>;
  proposition
currentUser:Admin

    constructor(private missionService: PropositionService,private user:UserService,
      private route:Router) {}

    ngOnInit() {

    this.currentUser=this.user.currentUserValue
     this.Propositions$= this.missionService.getPropositions();


  console.log(this.Propositions$);
    }


    delete(id){
      let m=confirm("Êtes-vous sûr de supprimer ce champ !!!?")
      if(!m){
        return;
      }

       return this.missionService.deleteProposition(id).subscribe( data => {
          console.log(data)
         this.propositions=data;
          console.log(data);
          this.route.navigate[("/table-mission")];

  })

    }

    }
