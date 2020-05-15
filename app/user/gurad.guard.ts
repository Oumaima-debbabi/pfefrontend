import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Injectable({
  providedIn: 'root'
})
export class GuradGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(): boolean {
    if (this.userService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

