import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { Association } from '../model/association';
import { AssociationService } from '../services/association.service';
import { AdminService } from 'src/app/admin/services/admin.service';


@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css']
})
export class AssociationsComponent implements OnInit {
name='';
associations:any;
  constructor(private associatonService:AssociationService,private as:AdminService) { }
  associations$:Observable<Association[]>
  ngOnInit() {
    this.associations$=this.associatonService.getAssociations()
  }
  searchTitle() {
    this.as.findByTitle(this.name)
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
