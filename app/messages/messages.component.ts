import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MessagesService } from '../services/messages.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {


  message:string = '';
  email:string='';
  emailasso:string=''
subject:string=''
formDirty:boolean=false;

registrationForm = new FormGroup({
  message: new FormControl("", [Validators.required,Validators.minLength(2),
    Validators.pattern('[a-zA-Z0-9_-\\s]*')]),
  email: new FormControl("", [Validators.required,Validators.minLength(3),
  Validators.maxLength(100)]),
  emailasso: new FormControl("", [Validators.required]),

  subject: new FormControl("", [Validators.required]),
});
constructor(
  private http: HttpClient,

) {}
private ROOT_URL = "http://localhost:4000/api/email";
ngOnInit() {


}

addPost(): void {
  const data = {
    message:this.message,
    subject:this.subject,
    email:this.email,
    emailasso:this.emailasso,

  }

  this.addMission(data)
    .subscribe(() => {
      this.message= '';
      this.email='';
      this.emailasso=''
      this.subject=''
     this.formDirty = false;

            })
}

handleChange() {
  this.formDirty = true;
}

addMission(data) {
  return this.http.post<any>(`${this.ROOT_URL}/send`, data)
  }

}
