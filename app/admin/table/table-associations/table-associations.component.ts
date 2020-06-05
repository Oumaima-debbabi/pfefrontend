import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from 'src/app/association/model/association';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Secteur } from 'src/app/secteur/model/secteur';

@Component({
  selector: 'app-table-associations',
  templateUrl: './table-associations.component.html',
  styleUrls: ['./table-associations.component.css']
})
export class TableAssociationsComponent implements OnInit {


  id: string;
name:'';
Associations$: Observable<Association[]>;
associations;
Secteurs$: Observable<Secteur[]>;

  constructor(private assoicationService:AdminService,
    private route:Router) {}
getsecteur()
{
  this.Secteurs$=this.assoicationService.getSecteurs()
}
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
  searchTitle() {
    this.assoicationService.findByTitle(this.name)
      .subscribe(
        data => {
          this.associations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}

