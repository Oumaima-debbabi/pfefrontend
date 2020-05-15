import { Component, OnInit } from '@angular/core';
import { Observable, } from 'rxjs';
import { Association } from '../model/association';
import { AssociationService } from '../services/association.service';


@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css']
})
export class AssociationsComponent implements OnInit {

  constructor(private associatonService:AssociationService) { }
  associations$:Observable<Association[]>
  ngOnInit() {
    this.associations$=this.associatonService.getAssociations()
  }

}
