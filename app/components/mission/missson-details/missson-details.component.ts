import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { MissionService } from '../service/mission.service';
import { Mission } from '../model/mission';
import { Observable, Subscription } from 'rxjs';
import { AssociationService } from 'src/app/association/services/association.service';
import { Association } from 'src/app/association/model/association';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { PopMissionComponent } from '../pop-mission/pop-mission.component';

@Component({
  selector: 'app-missson-details',
  templateUrl: './missson-details.component.html',
  styleUrls: ['./missson-details.component.css']
})


export class MisssonDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private missionService:MissionService,
    private associatonService:AssociationService,
    private router:ActivatedRoute,
    private dialog: MatDialog

  ){}
missions$:Observable<Mission[]>
mission:any
x:any
associations$:Observable<Association[]>
  ngOnInit() {
   this.missions$=this.missionService.getMissions4();
   this.associations$=this.associatonService.getAssociations();
  }
  ngOnDestroy():void{
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
  width:"720px"

    })
  console.log(mission)
  console.log(mission.nom_association1.nom_association)
  this.x =mission.nom_association1.nom_association
  console.log(this.x)
  }


  }
