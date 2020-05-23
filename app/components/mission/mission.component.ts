import { Component, OnInit } from '@angular/core';
import { MissionService } from './service/mission.service';
import { Observable } from 'rxjs';
import { Mission } from './model/mission';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
  limit =3;
  count = 0;
  offset = 0;


  constructor(
    private missionService:MissionService

  ){}
missions$:Observable<Mission[]>
  ngOnInit() {
    for (let i = 0; i < this.limit; i++) {
      this.missions$=this.missionService.getMissions4();
    }


}
}
