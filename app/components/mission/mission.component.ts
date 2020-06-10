import { Component, OnInit } from '@angular/core';
import { MissionService } from './service/mission.service';
import { Observable } from 'rxjs';
import { Mission } from './model/mission';

import { MatDialog, MatDialogConfig } from "@angular/material";
import { LoginComponent } from 'src/app/login/login.component';
import { PopMissionComponent } from './pop-mission/pop-mission.component';
import { MisssonDetailsComponent } from './missson-details/missson-details.component';
import { ActivatedRoute } from '@angular/router';
import { AssociationService } from 'src/app/association/services/association.service';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
x:any
id:string
nom_association1
mission:any
  constructor(private dialog: MatDialog
,
    private missionService:MissionService,
    private router:ActivatedRoute,
    private as:AssociationService

  ){}
missions$:Observable<Mission[]>


  ngOnInit() {
      this.missions$=this.missionService.getMissions();
      //this.mission = this.missionService.getMission("id")


}

onCreate(mission) {
  this.router.params.subscribe(params=> {

    this.missionService.getMission(params.mission).subscribe(res => {
      this.mission = res;
  });
});

const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
 dialogConfig.width = "60%";
  //this.dialog.open(PopMissionComponent,dialogConfig);

  this.dialog.open(PopMissionComponent, {
    data:mission,
width:"680px",

  })
console.log(mission)
console.log(mission.nom_association1.nom_association)
this.x =mission.nom_association1.nom_association
console.log(this.x)
}
populate(){

}

}
