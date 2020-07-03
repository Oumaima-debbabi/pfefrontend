import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Association } from 'src/app/association/model/association';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Secteur } from 'src/app/secteur/model/secteur';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-table-associations',
  templateUrl: './table-associations.component.html',
  styleUrls: ['./table-associations.component.css']
})
export class TableAssociationsComponent implements OnInit {

currentUser:Admin
  id: string;
name:'';
Associations$: Observable<Association[]>;
associations;
Secteurs$: Observable<Secteur[]>;
filterdAssociation:Association[]= new Array<Association>();
  constructor(private assoicationService:AdminService,private user:UserService,
    private route:Router) {}
getsecteur()
{


  this.currentUser=this.user.currentUserValue
  this.Secteurs$=this.assoicationService.getSecteurs()
}
 ngOnInit() {
   this.Associations$= this.assoicationService.getAssociations();
   this.associations=this.assoicationService.getALlas();
this.filterdAssociation=this.associations
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
filter(query:string){
  query= query.toLowerCase().trim();
  let allResults:Association[]= new Array<Association>();
  let terms: string[] = query.split(' ');
  terms=this.removeDuplicates(terms);
  terms.forEach(term=> {
    let results: Association[]=this.relevantAssociation(term);
    allResults=[...allResults, ...results]
  });

let uniqueResults= this.removeDuplicates(allResults)
this.filterdAssociation=uniqueResults
}
relevantAssociation(query:string):Array <Association>{
query=query.toLowerCase().trim();
let relevantAssociation=this.associations.filter(association=>{
  if(association.name && association.name.toLowerCase().include(query))
  {return true
  }
  if(association.nom_association && association.nom_association.toLowerCase().include(query))
  {return true
  }
  if(association.adresse && association.adresse.toLowerCase().include(query))
  {return true
  }
  return false;
})
return relevantAssociation;
}
removeDuplicates(arr:Array<any>): Array<any>{
  let uniqueResults:Set<any>=new Set<any>();
  arr.forEach(e =>uniqueResults.add(e));
return Array.from(uniqueResults)
}

}

