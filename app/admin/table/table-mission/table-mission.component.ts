import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Mission } from 'src/app/mission/model/mission';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-table-mission',
  templateUrl: './table-mission.component.html',
  styleUrls: ['./table-mission.component.css']
})
export class TableMissionComponent implements OnInit {

  id: string;
missions;
Missions$: Observable<Mission[]>;
mission

base_url="http://localhost:4000/api/mission";
  constructor(private missionService: AdminService,
    private route:Router) {}

  ngOnInit() {
   this.Missions$= this.missionService.getMissions();

  // this.url_image=this.base_url+this.mission.Photo;
console.log(this.Missions$);
  }


  delete(id){
    let m=confirm("Êtes-vous sûr de supprimer ce champ !!!?")
    if(!m){
      return;
    }

     return this.missionService.deleteMission(id).subscribe( data => {
        console.log(data)
       this.missions=data;
        console.log(data);
        this.route.navigate[("/table-mission")];

})

  }

  }
