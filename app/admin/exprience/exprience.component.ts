import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { UserService } from 'src/app/user/service/user.service';
import { Admin } from '../model/admin';
import { EditExperienceComponent } from '../edit/edit-experience/edit-experience.component';
import { Expression } from '@angular/compiler';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { Experience } from '../model/experience';

@Component({
  selector: 'app-exprience',
  templateUrl: './exprience.component.html',
  styleUrls: ['./exprience.component.css']
})
export class ExprienceComponent implements OnInit {
  experience:any;
  currentUser:Admin;
  experiences:any
secteurForm= new FormGroup({
  description: new FormControl("",[Validators.required])
});

  constructor(private secteurService:AdminService,
             private route:Router,
             private useS:UserService,
             private router:ActivatedRoute,
             private  dialog: MatDialog

    )
 {}

  ngOnInit() {
    this.currentUser=this.useS.currentUserValue;
  }


  newSecteur() {
    if (this.secteurForm.valid) {
      this.secteurService.addExperience(this.secteurForm.value).subscribe(res => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: true,
          timer: 3000
        });
        Toast.fire({
    title:'Experience bien ajoutée'

        })
        this.secteurForm.reset();

      });
    }
  }

onCreate(experience) {
  this.router.params.subscribe(params=> {

    this.secteurService.getExperience(params.experience).subscribe(res => {
      this.experience = res;
  });
});

const dialogConfig = new MatDialogConfig();
dialogConfig.disableClose = true;
dialogConfig.autoFocus = true;
 dialogConfig.width = "60%";
  //this.dialog.open(PopMissionComponent,dialogConfig);

  this.dialog.open(EditExperienceComponent, {
    data:experience,
width:"720px"

  })
console.log(experience)


}

}
