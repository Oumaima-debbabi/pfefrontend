import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { MissionService } from '../service/mission.service';
import { Mission } from '../model/mission';
import { Observable, Subscription } from 'rxjs';
import { AssociationService } from 'src/app/association/services/association.service';
import { Association } from 'src/app/association/model/association';

@Component({
  selector: 'app-missson-details',
  templateUrl: './missson-details.component.html',
  styleUrls: ['./missson-details.component.css']
})


export class MisssonDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private missionService:MissionService,
    private associatonService:AssociationService

  ){}
missions$:Observable<Mission[]>
associations$:Observable<Association[]>
  ngOnInit() {
   this.missions$=this.missionService.getMissions();
   this.associations$=this.associatonService.getAssociations();
  }
  ngOnDestroy():void{
  }

}
