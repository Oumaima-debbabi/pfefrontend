import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Benevole } from 'src/app/admin/benevole/model/benevole';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';
@Component({
  selector: 'app-table-benevole',
  templateUrl: './table-benevole.component.html',
  styleUrls: ['./table-benevole.component.css']
})
export class TableBenevoleComponent implements OnInit {
 id: string;
currentUser:Admin
Benevoles$: Observable<Benevole[]>

benevoles;
  constructor(private bService:AdminService,private user:UserService,
    private route:Router) {}

  ngOnInit() {
    this.currentUser=this.user.currentUserValue
   this.Benevoles$= this.bService.getBenevoles();

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

