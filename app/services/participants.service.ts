import { Injectable } from '@angular/core';
import { User } from '../user/model/user';
import { Route } from '@angular/compiler/src/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Benevole } from '../admin/benevole/model/benevole';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
  };
  private ROOT_URL = "http://localhost:4000/api/benevole";


  constructor(private http: HttpClient,private router:Route)
   {

    }


    getParticipants(id:string):Observable<Benevole[]>
    {
      return this.http.get<Benevole[]>(`${this.ROOT_URL}/getparticipant/${id}`);
    }
}
