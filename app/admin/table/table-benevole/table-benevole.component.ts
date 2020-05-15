import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Benevole } from 'src/app/admin/benevole/model/benevole';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-table-benevole',
  templateUrl: './table-benevole.component.html',
  styleUrls: ['./table-benevole.component.css']
})
export class TableBenevoleComponent implements OnInit {
 id: string;

Benevoles$: Observable<Benevole[]>

benevoles;
  constructor(private bService:AdminService,
    private route:Router) {}

  ngOnInit() {
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

