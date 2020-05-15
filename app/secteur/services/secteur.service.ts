import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Secteur } from '../model/secteur';

@Injectable({
  providedIn: 'root'
})
export class SecteurService {
  private ROOT_URL = "http://localhost:4000/api/secteur";

  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")

  };

  constructor(private http: HttpClient) {}

  getSecteurs(): Observable<Secteur[]> {
    return this.http.get<Secteur[]>(`${this.ROOT_URL}`);
  }

  getSecteur(id: string) {
    return this.http.get<Secteur>(`${this.ROOT_URL}/${id}`);
  }

  addSecteur(Secteur) {
    return this.http.post<any>(this.ROOT_URL,Secteur, this.httpOptions);
  }

  editSecteur(secteur, id: string) {
    return this.http.put<any>(
      `${this.ROOT_URL}/${id}`,
      secteur,
      this.httpOptions
    );
  }

  deleteSecteur(id: string) {
    return this.http.delete(`${this.ROOT_URL}/${id}`, this.httpOptions);
  }
}
