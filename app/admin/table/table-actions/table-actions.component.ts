import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MissionService } from 'src/app/components/mission/service/mission.service';
import { Mission } from 'src/app/mission/model/mission';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { Benevole } from '../../benevole/model/benevole';

@Component({
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.css']
})
export class TableActionsComponent implements OnInit {

  id: string;

Benevoles$: Observable<Benevole[]>

benevoles;
  constructor(private bService:AdminService,
    private route:Router) {}

  ngOnInit() {
   this.Benevoles$= this.bService.getBenevoles();
console.log(this.Benevoles$)
  }
  delete(id){
    let m=confirm("Êtes-vous sûr de supprimer ce champ!!!?")
    if(!m){
      return;
    }

      return this.bService.deleteBenevole(id).subscribe( data => {
        console.log(data)
       this.benevoles=data;
        console.log(data);
        this.route.navigate[("/admin/table-benevole")];

})
  }
}

