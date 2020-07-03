import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MissionService } from 'src/app/components/mission/service/mission.service';
import { Observable } from 'rxjs';
import { Mission } from 'src/app/components/mission/model/mission';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-table-action',
  templateUrl: './table-action.component.html',
  styleUrls: ['./table-action.component.css']
})
export class TableActionComponent implements OnInit {

currentUser:Admin
  id: string;
missions:object =[];
missions$;
nomissions:any;
nojobs:any;
errormsg:any;
successmsg:boolean;
constructor(private router:Router,private activeroute:ActivatedRoute,
  private missionservice:MissionService,private user:UserService
  ) { }

   ngOnInit() {
     this.currentUser=this.user.currentUserValue
    this.getMissionspar();
    this.getmissions();
    //this.missions=this.missionservice.getmissionpar()

  }
  getmissions(){

  }
  getMissionspar()  {

    this.missionservice.getmissionpar().then(
      (response:any) => {
      this.missions = response;
      console.log(this.missions)
  });

  }
remove(id){
  let m=confirm("Êtes-vous sûr de supprimer ce champ!!!?")
  if(!m){
    return;
  }

    return this.missionservice.removemission(id).subscribe( data => {
      console.log(data)
      console.log(data);
      this.router.navigate[("/admin/table-action")];

})

}
}
