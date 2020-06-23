import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
  };
  private ROOT_URL = "http://localhost:4000/api/email";


  constructor(private http: HttpClient,private router:Route)
   {

    }
  addMission(data) {
    return this.http.post<any>(`${this.ROOT_URL}/send`, data)
    }
}
