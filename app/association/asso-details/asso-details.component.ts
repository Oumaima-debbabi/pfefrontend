import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { MissionService } from 'src/app/components/mission/service/mission.service';
import { Observable } from 'rxjs';
import { Mission } from 'src/app/components/mission/model/mission';
import { PopMissionComponent } from 'src/app/components/mission/pop-mission/pop-mission.component';

@Component({
  selector: 'app-asso-details',
  templateUrl: './asso-details.component.html',
  styleUrls: ['./asso-details.component.css']
})
export class AssoDetailsComponent implements OnInit {
  association: any={}
  x:any
id:string
nom_association1
mission:any
  constructor(
    private route:ActivatedRoute,
    private sS:AdminService,private dialog: MatDialog,
    private missionService:MissionService,

  ) { }
  missions$:Observable<Mission[]>

  ngOnInit() {
    this.missions$=this.missionService.getMissions();

    this.route.params.subscribe(params => {
      this.sS.getAssociation(params.id).subscribe(res => {
        this.association= res;
      });
    });
  }

  onCreate(mission) {
    this.route.params.subscribe(params=> {

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
  width:"720px"

    })
  console.log(mission)
  console.log(mission.nom_association1.nom_association)
  this.x =mission.nom_association1.nom_association
  console.log(this.x)
  }
  }

