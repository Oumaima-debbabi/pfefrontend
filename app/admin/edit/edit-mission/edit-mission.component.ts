import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Association } from 'src/app/association/model/association';
import { Observable } from 'rxjs';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {
  associations$:Observable<Association[]>
currentUser:Admin
  mission: any = {};
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private user:UserService,
    private mS:AdminService ,private fb: FormBuilder) { this.createForm();
    }

  createForm(){ this.editForm= this.fb.group
    ({
      type: new FormControl("",[Validators.required]),
      besoin: new FormControl("",[Validators.required]),
      //nombre_preson: new FormControl("",[Validators.required]),
       lieu: new FormControl("",[Validators.required]),
      date: new FormControl("",[Validators.required]),
      datefin: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),
      qd: new FormControl("",[Validators.required]),
      sujet: new FormControl("",[Validators.required]),
      etat: new FormControl("",[Validators.required]),


    });
  }


  ngOnInit() {
    this.currentUser=this.user.currentUserValue
    this.route.params.subscribe(params => {
        this.mS.getMission(params.id).subscribe(res => {
          this.mission = res;
          this.associations$=this.mS.getAssociations()
      });
    });
  }

  updateMission(sujet,besoin,etat,description,lieu,date, datefin,type,qd
    ,id) {
    this.route.params.subscribe(params => {
      this.mS. updateMissio(sujet,besoin,etat,description,lieu,date, datefin,type,qd,
        params.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'Mission modifiée'

      })
      this.router.navigate(['/admin/table-missions']);
    });
  }
}
