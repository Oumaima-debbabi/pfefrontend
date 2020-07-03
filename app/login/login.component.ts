import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from '../user/service/user.service';
import { format } from 'url';
import Swal from 'sweetalert2';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
isLoading=false;
  constructor(private authService: UserService, private router: Router) {}

  ngOnInit() {}

  userLogin() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        res => {
          console.log(res);
          localStorage.setItem("token", res.token);
             //this.loginForm.reset();
          this.router.navigate( ["/admin/profil"])
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            timer: 3000
          });
          Toast.fire({
      title:' Bienvenue ! '

          })
        },

        err => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            timer: 3000
          });
          Toast.fire({
      title:'email ou mot de passe invalid ! '

          })
   }
      );
    }
  }

}
