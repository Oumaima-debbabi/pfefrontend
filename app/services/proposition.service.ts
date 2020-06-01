import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Proposition } from '../model/propositon';

@Injectable({
  providedIn: 'root'
})
export class PropositionService {
  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")
      .set("auth-token",localStorage.getItem("token"))
  };
  private ROOT_URL = "http://localhost:4000/api/proposition";
  constructor(private http: HttpClient,private router:Router) { }
  getPropositions(): Observable<Proposition[]> {
    return this.http.get<Proposition[]>(`${this.ROOT_URL}`);
  }

  getProposition(id: string) {
    return this.http.get<Proposition[]>(`${this.ROOT_URL}/${id}`);
  }

  addProposition(proposition) {
    return this.http.post<any>(this.ROOT_URL,proposition, this.httpOptions);
  }

  editProposition(proposition, id: string) {
    return this.http.put<any>(
      `${this.ROOT_URL}/edit/${id}`,proposition,
      this.httpOptions
    );
  }
  updateProposition(  titre,type,description,lieu, precision, id) {
    const obj = {
      titre,type,description,lieu, precision
    };
    this
      .http
      .post(`${this.ROOT_URL}/update/${id}`, obj)
      .subscribe(res => console.log('Update Complete'));
  }

  deleteProposition(id: string) {
    return this.http.delete(`${this.ROOT_URL}/${id}`, this.httpOptions);
  }

}
