import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';
import { MissionService } from '../service/mission.service';
import { AssociationService } from 'src/app/association/services/association.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';

import { Benevole } from 'src/app/admin/benevole/model/benevole';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {
benevoles:any=[]
mission:Mission
private ROOT_URL = "http://localhost:4000/api/benevole";



benevole$:Observable<Benevole[]>;
  constructor( private route:ActivatedRoute,
  private mS:MissionService,
  private http: HttpClient,
  private dialog: MatDialog
     ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
    this.mS.getMission(params.id).subscribe(res=>{
      if (res){
        this.mission=res;
        console.log(this.mission)
      }
    })
  }

    )

    this.route.params.subscribe(params => {

       this.getParticipants(params.id)
      console.log(this.mission)
    });

    this.dialog.closeAll();
  }
  apply(id)
    {
   console.log(id)

      this.mS.applymission(id).subscribe(
     (response:any)=>{
      if(response.status && response.status==1){
      console.log(response);
    }
  }

)}


  getParticipants(id) {

    this.getParticipantsService(id).subscribe (
      (Response:any)=>{
this.benevoles=Response
console.log(this.benevoles)
      }

    )

  }


  getParticipantsService(id:string)
  {
    return this.http.get(`${this.ROOT_URL}/getparticipant/${id}`);
  }


}
