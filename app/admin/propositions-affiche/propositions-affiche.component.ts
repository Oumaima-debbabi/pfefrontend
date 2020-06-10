import { Component, OnInit } from '@angular/core';
import { PropositionService } from 'src/app/services/proposition.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Proposition } from 'src/app/model/propositon';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-propositions-affiche',
  templateUrl: './propositions-affiche.component.html',
  styleUrls: ['./propositions-affiche.component.css']
})

export class PropositionsAfficheComponent implements OnInit {
  tiles: Tile[] = [
    {text: '', cols: 2, rows: 3, color: 'lightblue'},
    {text: '', cols: 2, rows: 3, color: 'lightgreen'},

  ];
  id: string;
  propositions;
  Propositions$: Observable<Proposition[]>;
  proposition


    constructor(private missionService: PropositionService,
      private route:Router) {}

    ngOnInit() {
     this.Propositions$= this.missionService.getAllPropositions();


  console.log(this.Propositions$);
    }
}
