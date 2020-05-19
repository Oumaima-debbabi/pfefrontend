import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Admin } from 'src/app/admin/model/admin';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: "root"
})
export class UserService {
  private ROOT_URL = "http://localhost:4000/api/";

  private currentUserSubject: BehaviorSubject<Admin>;
  public currentUser: Observable<Admin>;
  constructor(private http: HttpClient,private router: Router ) {
    this.currentUserSubject = new BehaviorSubject<Admin>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();}

    public get currentUserValue(): Admin {
        return this.currentUserSubject.value;
    }

  register(user) {
    return this.http.post<any>(`${this.ROOT_URL}user/register`, user);
  }
  login(user) {
    return this.http.post<any>(`${this.ROOT_URL}user/login`, user)
    .pipe(map(user => {
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return user;
  }));
  }
  logOut() {
  //   localStorage.removeItem("token");
  //   this.router.navigate(["/login"]);
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  // loggedIn() {
  //   return !!localStorage.getItem("token");

  // }

}
