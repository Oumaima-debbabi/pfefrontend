import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Route } from '@angular/compiler/src/core';
import { Experience } from '../../model/experience';

@Component({
  selector: 'app-edit-experience',
  templateUrl: './edit-experience.component.html',
  styleUrls: ['./edit-experience.component.css']
})
export class EditExperienceComponent implements OnInit {
experience: Experience
editForm: FormGroup;
exp:any
  constructor(
    @Inject(MAT_DIALOG_DATA) public data :Experience, private ex:AdminService,private route:ActivatedRoute
 ,private router :Router,private fb: FormBuilder,
 private dialog:MatDialog
 ,public dialogRef: MatDialogRef<EditExperienceComponent>
) { this.experience = data,
  this.createForm();
}



  ngOnInit() {

  }
  createForm(){ this.editForm= this.fb.group
    ({
      description: new FormControl("",[Validators.required]),

    });
  }
  updateexperience( description, id) {
    this.route.params.subscribe(params => {
      this.ex.udapteEx(description,this.experience._id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'Experience modifiée avec succés'

      })

      this.dialog.closeAll();
    });
  }
 
}
