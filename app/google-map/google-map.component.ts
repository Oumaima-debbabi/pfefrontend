import { Component } from '@angular/core';
import { MapsService } from './maps.service';
import { AssociationService } from '../association/services/association.service';
import { Observable } from 'rxjs';
import { Association } from '../association/model/association';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent {



  lat:string='';
  lng:string='';
  title: string ='';

  location :Object;
  constructor(private map:MapsService,private associatonService:AssociationService) { }
  associations$:Observable<Association[]>
  ngOnInit() {
    this.associations$=this.associatonService.getAssociations(),
    this.map.getLocation().subscribe(data=> {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.title = data.country_name;

     });


    }

}
