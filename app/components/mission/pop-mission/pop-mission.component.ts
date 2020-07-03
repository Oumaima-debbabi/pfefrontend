import { Component, OnInit, Inject } from '@angular/core';
import { MissionService } from '../service/mission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Association } from 'src/app/association/model/association';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Mission } from '../model/mission';
import { MatDialogRef, MAT_DIALOG_DATA ,MatDialog, MatDialogConfig} from '@angular/material';
import { Etat } from 'src/app/admin/model/etat';

@Component({
  selector: 'app-pop-mission',
  templateUrl: './pop-mission.component.html',
  styleUrls: ['./pop-mission.component.css']
})
export class PopMissionComponent implements OnInit
 {
  x:any
  id:string
  itemList: Mission[];
  //editForm: FormGroup;
  mission:Mission
  constructor(
    @Inject(MAT_DIALOG_DATA) public data :Mission,
    public dialogRef: MatDialogRef<PopMissionComponent>,

  private route: ActivatedRoute, private router: Router,
    private mS:MissionService ,private fb: FormBuilder,
    private dialog: MatDialog,

    )
     {
       this.mission=data
    }
    get isExpried() {
      return this.mission.etat === Etat.expired;
  }
  ngOnInit() {

    }

   apply(id){
      this.mS.applymission(id).subscribe(
     (response:any)=>{
      if(response.status && response.status==1){
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'Votre souhait de participer à la mission a bien été enregistrée, vous recevrez un mail de confirmation quand elle aura été validée ! '

      })

      }

  }

)}

}



