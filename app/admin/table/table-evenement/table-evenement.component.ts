import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/evenement/model/evenement';

@Component({
  selector: 'app-table-evenement',
  templateUrl: './table-evenement.component.html',
  styleUrls: ['./table-evenement.component.css']
})
export class TableEvenementComponent implements OnInit {

  id: string;
evenements;
Evenements$: Observable<Evenement[]>;

  constructor(private evenementService:AdminService,
    private route:Router) {}

  ngOnInit() {
   this.Evenements$= this.evenementService.getEvenements();

  }
  delete(id){
    let m=confirm("Êtes-vous sûr de supprimer ce champ !!!?")
    if(!m){
      return;
    }

      return this.evenementService.deleteEvenement(id).subscribe( data => {
        console.log(data)
       this.evenements=data;
        console.log(data);
        this.route.navigate[("/admin/table-associations")];

})
  }
  }

