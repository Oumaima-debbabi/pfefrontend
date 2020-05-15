import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { mimeType } from '../mimi-type.validator';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
missionForm= new FormGroup({

    type: new FormControl("",[Validators.required]),
    besoin: new FormControl("",[Validators.required]),
    //nombre_preson: new FormControl("",[Validators.required]),
    nom_res: new FormControl("",[Validators.required]),
    lieu: new FormControl("",[Validators.required]),
    date: new FormControl("",[Validators.required]),
    datefin: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
   //Photo: new FormControl(null, {validators: [Validators.required],asyncValidators: [mimeType] })
   });

    constructor(private missionService:AdminService,
               private route:Router
      )
   {}

    ngOnInit() {}

    newMissin() {
      if (this.missionForm.valid) {
        this.missionService.addMission(this.missionForm.value).subscribe(res => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'center',
            showConfirmButton: true,
            timer: 3000
          });
          Toast.fire({
      title:'Mission ajoutée'

          })
          this.missionForm.reset();

        });
      }
    }

    }
