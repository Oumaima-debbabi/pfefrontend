import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from 'src/app/association/model/association';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-associations',
  templateUrl: './table-associations.component.html',
  styleUrls: ['./table-associations.component.css']
})
export class TableAssociationsComponent implements OnInit {


  id: string;

Associations$: Observable<Association[]>;
associations;
  constructor(private assoicationService:AdminService,
    private route:Router) {}

  ngOnInit() {
   this.Associations$= this.assoicationService.getAssociations();

  }
  delete(id){
    let m=confirm("Êtes-vous sûr de supprimer ce champ!!!?")
    if(!m){
      return;
    }

      return this.assoicationService.deleteAssociation(id).subscribe( data => {
        console.log(data)
       this.associations=data;
        console.log(data);
        this.route.navigate[("/table-associations")];

})
  }
}

