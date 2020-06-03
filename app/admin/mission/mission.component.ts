import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { mimeType } from '../mimi-type.validator';
import { Association } from 'src/app/association/model/association';
import { Observable } from 'rxjs';
import { Mission } from 'src/app/mission/model/mission';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit {
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
   qd:string = '';
   besoin:string = '';
   formDirty: boolean = false
   datefin:string = ''
   date:string = '';
   sujet:string = '';
   description:string = '';
   nom_res:string = '';
   lieu:string = '';
   type:string = '';
   imageUrl:string = ''
   imageUrl1:string=''
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
    addPost(): void {
      const data = {
        lieu: this.lieu,
        description: this.description,
        date: this.date,
        sujet:this.sujet,
        datefin: this.datefin,
        nom_res: this.nom_res,
        imageUrl: this.imageUrl,
        besoin:this.besoin,
        qd:this.qd,
        type:this.type
      }

      this.missionService.addMission(data)
        .subscribe(() => {
          this.description='';
          this.nom_res = '';
          this.lieu = '';
          this.imageUrl = '';
          this.datefin='';
          this.date='';
          this.sujet='';
          this.qd='',
          this.type='';
          this.besoin='';

          this.formDirty = false;

        })
    }

    handleChange() {
      this.formDirty = true;
    }

    }
