import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../model/mission';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
  private ROOT_URL = "http://localhost:4000/api/mission";

  private httpOptions = {
    headers: new HttpHeaders()
      .set("Content-Type", "application/json")

  };

  constructor(private http: HttpClient) {}

  getMissions(): Observable<Mission[]> {
    return this.http.get<Mission[]>(`${this.ROOT_URL}`);
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
}
