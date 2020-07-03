import { Component, OnInit } from '@angular/core';
import { PropositionService } from 'src/app/services/proposition.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Proposition } from 'src/app/model/propositon';
import { DialogPosition, MatDialog } from '@angular/material';
import { MessagesComponent } from 'src/app/messages/messages.component';
import { Admin } from '../model/admin';
import { UserService } from 'src/app/user/service/user.service';
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

  id: string;
  propositions;
  Propositions$: Observable<Proposition[]>;
  proposition
currentUser:Admin

    constructor(private missionService: PropositionService,
      private route:Router,
      private dialog:MatDialog,private user:UserService) {}

    ngOnInit() {
     this.Propositions$= this.missionService.getAllPropositions();

     this.currentUser=this.user.currentUserValue

  console.log(this.Propositions$);
    }
    onCreate() {
      const dialogPosition:DialogPosition={
        top:'30px',
        right:'400px'
      };
      const dialogRef=this.dialog.open(MessagesComponent,{


        position:dialogPosition
      })

        }
      }
