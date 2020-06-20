import { Component, OnInit } from '@angular/core';
import { Benevole } from '../../benevole/model/benevole';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MissionService } from 'src/app/components/mission/service/mission.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {


  private ROOT_URL = "http://localhost:4000/api/benevole";
  constructor( private route:ActivatedRoute,
    private mS:MissionService,
    private http: HttpClient,
    private dialog: MatDialog,
       ) {
    }
benevoles:object=[];
    benevole$:Observable<Benevole[]>;
    ngOnInit() {
      this.route.params.subscribe(params => {

        this.getParticipants(params.id)
      });

      this.dialog.closeAll();
    }


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
    delete(id){
      let m=confirm("Êtes-vous sûr de supprimer ce champ !!!?")
      if(!m){
        return;
      }

  //      return this.bS.deleteMission(id).subscribe( data => {
  //         console.log(data)
  //        this.missions=data;
  //         console.log(data);
  //         this.route.navigate[("/table-mission")];

  // })

    }
  }
