import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Mission } from 'src/app/components/mission/model/mission';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { Association } from 'src/app/association/model/association';
import Swal from 'sweetalert2';
import { Proposition } from 'src/app/model/propositon';
import { PropositionService } from 'src/app/services/proposition.service';

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.css']
})
export class PropositionsComponent implements OnInit {


  missionForm= new FormGroup({
    sujet: new FormControl("",[Validators.required]),
    //action: new FormControl("",[Validators.required]),
    //: new FormControl("",[Validators.required]),

      type: new FormControl("",[Validators.required]),
      titre: new FormControl("",[Validators.required]),
      //nombre_preson: new FormControl("",[Validators.required]),
      lieu: new FormControl("",[Validators.required]),
      precision: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
     });
     imageUrl:string=''
     Photo: string = ''
  propoistion:Proposition
      constructor(private missionService:PropositionService,
                 private route:Router,
                 aService:AdminService
        )
     {}

      ngOnInit() {

      }

      newMissin() {
        if (this.missionForm.valid) {
          this.missionService.addProposition(this.missionForm.value).subscribe(res => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'center',
              showConfirmButton: true,
              timer: 3000
            });
            Toast.fire({
        title:'Mission ajoutée'

            })

            this.route.navigate(["/admin/table-propositions"]);
          });
        }
      }



      }
