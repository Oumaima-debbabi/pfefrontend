import { Component, OnInit } from '@angular/core';
import { Benevole } from '../../benevole/model/benevole';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { MissionService } from 'src/app/components/mission/service/mission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';
import { Route } from '@angular/compiler/src/core';
import { Mission } from 'src/app/components/mission/model/mission';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

currentUser:Admin
  private ROOT_URL = "http://localhost:4000/api/benevole";
  constructor( private route:ActivatedRoute,
    private mS:MissionService,
    private bs:AdminService,
    private http: HttpClient,
    private dialog: MatDialog,
    private user:UserService,
    private router:Router
       ) {
    }
    benevole:Benevole
benevoles:object=[];
mission:Mission
id2:Mission
    benevole$:Observable<Benevole[]>;
    ngOnInit() {
      this.currentUser=this.user.currentUserValue
      this.route.params.subscribe(params => {

        this.getParticipants(params.id)
      });

      this.route.params.subscribe(params => {
        this.mS.getMission(params.id).subscribe(res=>{
          if (res){
            this.mission=res;
            console.log(this.mission._id)

          }
        })
      })
    }
    remove(id){
      let m=confirm("Êtes-vous sûr de supprimer ce champ!!!?")
      if(!m){
        return;
      }
    return this.missionremove(id).subscribe( data => {
          console.log(data);
          this.router.navigate[("/admin/table-participant")];

    })

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
    missionremove(id)
    {


      return this.http.get(`${this.ROOT_URL}/remove/${id}/${this.mission._id}`);
    }

  }
