import { Component, OnInit } from '@angular/core';
import { PropositionService } from 'src/app/services/proposition.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Proposition } from 'src/app/model/propositon';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-all-propositions',
  templateUrl: './all-propositions.component.html',
  styleUrls: ['./all-propositions.component.css']
})
export class AllPropositionsComponent implements OnInit {
  id: string;
  propositions;
  Propositions$: Observable<Proposition[]>;
  proposition
currentUser:Admin

    constructor(private missionService:PropositionService,private user:UserService,
      private route:Router) {}

    ngOnInit() {
this.currentUser=this.user.currentUserValue
     this.Propositions$= this.missionService.getAllPropositions();


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
