import { Component, OnInit } from '@angular/core';
import { UserService } from "../service/user.service";
import { FormGroup, Validators, FormControl, NgForm } from "@angular/forms";
import { ToastComponent } from 'src/app/toast/toast.component';
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    name: new FormControl("", [Validators.required,
      Validators.minLength(2),
      Validators.maxLength(30),
      Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
    email: new FormControl("", [Validators.required, Validators.minLength(3),
      Validators.maxLength(100)]),
    password: new FormControl("", [Validators.required,Validators.minLength(6)]),
    statut: new FormControl("", [Validators.required]),
prenom: new FormControl("", [Validators.minLength(2),
  Validators.maxLength(30),
  Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
civilite: new FormControl("", [Validators.required]),
adresse: new FormControl("", [Validators.required]),
numero_telephone: new FormControl("", [Validators.required]),
code_postal: new FormControl("", [Validators.required]),
annee_naissance: new FormControl("", [Validators.required]),
 profession: new FormControl("", [Validators.required]),
  });

  constructor(
    private userService: UserService,
    private router: Router
    ) {}

  ngOnInit() {}

  userRegister() {
    if (this.registerForm.valid) {
      this.userService.register(this.registerForm.value).subscribe(res => {
        //this.setMessage('you successfully registered!', 'success');
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: true,
          timer: 3000
        });
        Toast.fire({
    title:'vous etes inscrit et vous pouvez activer votre compte,consulter votre boite demail'

        })

        this.registerForm.reset();
        //this.flashMessage.show('You are now registered and can now login', {cssClass: 'alert-success', timeout: 3000});
        //error => this.toast.setMessage('no!', '')
       // this.router.navigate(["/login"]);
      });
    }

  }
}
