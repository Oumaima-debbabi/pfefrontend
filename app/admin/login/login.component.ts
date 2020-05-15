import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  constructor(private userService: AdminService, private router: Router) {}

  ngOnInit() {}

  // userLogin() {
  //   if (this.loginForm.valid) {
  //     this.userService.login(this.loginForm.value).subscribe(
  //       res => {
  //         console.log(res);
  //         localStorage.setItem("token", res.token);
  //         this.loginForm.reset();
  //         this.router.navigate(["/listings"]);
  //       },
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   }
  // }
}
