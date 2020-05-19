import { Component } from '@angular/core';
import { MapsService } from './maps.service';

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
  constructor(private map:MapsService) { }

  ngOnInit() {
    this.map.getLocation().subscribe(data=> {
      console.log(data);
      this.lat = data.latitude;
      this.lng = data.longitude;
      this.title = data.country_name;
     }
      )
  }

}
