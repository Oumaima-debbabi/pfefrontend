import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evenement } from '../model/evenement';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {
  private ROOT_URL1 = "http://localhost:4000/api/evenet";

  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")

  };

  constructor(private http: HttpClient) {}

  getEvenements(): Observable<Evenement[]> {
    return this.http.get<Evenement[]>(`${this.ROOT_URL1}`);
  }

  getEvenement(id: string) {
    return this.http.get<Evenement>(`${this.ROOT_URL1}/${id}`);
  }

  addEvenement(Evenement) {
    return this.http.post<any>(this.ROOT_URL1,Evenement, this.httpOptions);
  }

  editEvenement(Evenement, id: string) {
    return this.http.put<any>(
      `${this.ROOT_URL1}/${id}`,
      Evenement,
      this.httpOptions
    );
  }

  deleteEvenement(id: string) {
    return this.http.delete(`${this.ROOT_URL1}/${id}`, this.httpOptions);
  }
}
