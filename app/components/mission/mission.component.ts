import { Component, OnInit } from '@angular/core';
import { MissionService } from './service/mission.service';
import { Observable } from 'rxjs';
import { Mission } from './model/mission';

import { MatDialog, MatDialogConfig } from "@angular/material";
import { LoginComponent } from 'src/app/login/login.component';
import { PopMissionComponent } from './pop-mission/pop-mission.component';
import { MisssonDetailsComponent } from './missson-details/missson-details.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {

id:string


  constructor(private dialog: MatDialog
,
    private missionService:MissionService,
    private router:ActivatedRoute

  ){}
missions$:Observable<Mission[]>
  ngOnInit() {
      this.missions$=this.missionService.getMissions4();

}
onCreate(id) {
    this.id = this.router.snapshot.paramMap.get("id");
//this.missionService.getMission("id");
console.log(id)
   const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
 dialogConfig.autoFocus = true;
   dialogConfig.width = "70%";
  this.dialog.open(PopMissionComponent,dialogConfig);
}
}
