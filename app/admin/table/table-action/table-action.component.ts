import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MissionService } from 'src/app/components/mission/service/mission.service';
import { Observable } from 'rxjs';
import { Mission } from 'src/app/components/mission/model/mission';

@Component({
  selector: 'app-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.css']
})
export class TableActionComponent implements OnInit {


  id: string;
missions:any =[];

nomissions:any;
nojobs:any;
errormsg:any;
successmsg:boolean;
constructor(private router:Router,private activeroute:ActivatedRoute,
  private missionservice:MissionService) { }

  ngOnInit() {
    this.getmissionpar();
    //this.missions=this.missionservice.getmissionpar()

  }
  getmissionpar()
  {

    this.missionservice.getmissionpar().subscribe(
      (response:any) => {
      this.missions = response;
      console.log(this.missions)
  });

  }

}
