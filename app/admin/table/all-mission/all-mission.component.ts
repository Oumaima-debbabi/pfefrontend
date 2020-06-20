import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Mission } from 'src/app/mission/model/mission';

@Component({
  selector: 'app-all-mission',
  templateUrl: './all-mission.component.html',
  styleUrls: ['./all-mission.component.css']
})
export class AllMissionComponent implements OnInit {


  id: string;
missions;
Missions$:Observable<Mission[]>;
mission;
url_image:any;
base_url="http://localhost:4000/api/mission";
  constructor(private missionService: AdminService,
    private route:Router) {}

  ngOnInit() {

   this.Missions$= this.missionService.getmissionss();
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
