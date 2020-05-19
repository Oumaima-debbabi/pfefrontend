import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude :string;
  longitude:string;
  country_name : string ;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {


  constructor(private http: HttpClient) { }
  getLocation()
  {
    return this.http.get<Location>('http://api.ipapi.com/197.238.152.27?access_key=f8a38c4eb6ef21402f089403b0c6f401')
  }

}
