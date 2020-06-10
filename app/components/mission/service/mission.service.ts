import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {Mission} from "../model/mission"
import { FormGroup } from '@angular/forms';
import * as _ from 'lodash';
@Injectable({
  providedIn: 'root'
})
export class MissionService {  private ROOT_URL = "http://localhost:4000/api/mission";

private httpOptions = {
  headers: new HttpHeaders()
    .set("Content-Type", "application/json")

};
public currentUser: Observable<Mission>;

private currentUserSubject: BehaviorSubject<Mission>;


constructor(private http: HttpClient) {

  this.currentUserSubject = new BehaviorSubject<Mission>(
    JSON.parse(localStorage.getItem('currentUser')));
  this.currentUser = this.currentUserSubject.asObservable();
}
public get currentUserValue(): Mission {
  return this.currentUserSubject.value;
}
form: FormGroup
getMissions4(): Observable<Mission[]> {
  return this.http.get<Mission[]>(`${this.ROOT_URL}/get4`);
}
getMissions(): Observable<Mission[]> {
  return this.http.get<Mission[]>(`${this.ROOT_URL}/`);
}

getMission(id: string) {
  return this.http.get<Mission>(`${this.ROOT_URL}/${id}`);
}

addMission(Mission) {
  return this.http.post<any>(this.ROOT_URL,Mission, this.httpOptions);
}

editMission(mission, id: string) {
  return this.http.put<any>(
    `${this.ROOT_URL}/${id}`,
    mission,
    this.httpOptions
  );
}

deleteMission(id: string) {
  return this.http.delete(`${this.ROOT_URL}/${id}`, this.httpOptions);
}


participer(mission: Mission): Observable<any> {
  return this.http.post(this.ROOT_URL, { mission });
}
}

