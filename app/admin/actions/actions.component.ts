import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mission } from 'src/app/components/mission/model/mission';
import { Admin } from '../model/admin';
import { Route } from '@angular/compiler/src/core';
import { AdminService } from '../services/admin.service';
import { Association } from 'src/app/association/model/association';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent implements OnInit {

  missionForm= new FormGroup({
    sujet: new FormControl("",[Validators.required]),
    //action: new FormControl("",[Validators.required]),
    qd: new FormControl("",[Validators.required]),

      type: new FormControl("",[Validators.required]),
      besoin: new FormControl("",[Validators.required]),
      //nombre_preson: new FormControl("",[Validators.required]),
      nom_res: new FormControl("",[Validators.required]),
      lieu: new FormControl("",[Validators.required]),
      date: new FormControl("",[Validators.required]),
      datefin: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
     imageUrl: new FormControl("",  [Validators.required])
     });
     imageUrl:string=''
     Photo: string = ''
  mission:Mission
      constructor(private missionService:AdminService,
                 private route:Router,
                 aService:AdminService
        )
     {}
     associations$:Observable <Association[]>
   uploadImage(event) {
      this.missionService.uploadImage(event.target.files[0])
        .subscribe((res: any) => {
          this.imageUrl = res.imageUrl
        })
    }
      ngOnInit() {
        this.associations$ =this.missionService.getAssociations()

      }

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

            this.route.navigate(["/admin/table-mission"]);
          });
        }
      }



      }

