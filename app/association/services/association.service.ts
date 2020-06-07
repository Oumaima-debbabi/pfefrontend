import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Association } from '../model/association';
@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  private ROOT_URL = "http://localhost:4000/api/";
  private APIurl = "http://localhost:4000/api/secteur";

  constructor(private http:HttpClient) { }
  registration(data) {
    return this.http.post<any>(`${this.ROOT_URL}association/register`, data);
  }
  uploadImage(image) {
    const data = new FormData()
    data.append('image',image)
    return this.http.post(this.ROOT_URL+'association/upload', data)
  }
  // getSecteur() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.http.get(this.ROOT_URL+ 'secteur/getAll', httpOptions);
  // }
  getAssociations(): Observable<Association[]> {
    return this.http.get<Association[]>(`${this.ROOT_URL}association`);
  }
  getAssociations8(): Observable<Association[]> {
    return this.http.get<Association[]>(`${this.ROOT_URL}association/get`);
  }

  getAssociation(id: string) {
    return this.http.get<Association>(`${this.ROOT_URL}association${id}`);
  }
}
