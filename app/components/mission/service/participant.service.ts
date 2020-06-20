import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private ROOT_URL = "http://localhost:4000/api/benevole";

  
  constructor(private http: HttpClient,private router:Route)
   {

    }

    getParticipants(id:string)
    {
      return this.http.get(`${this.ROOT_URL}/getparticipant/${id}`);
    }


}
