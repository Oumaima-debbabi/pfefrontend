import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-mission',
  templateUrl: './edit-mission.component.html',
  styleUrls: ['./edit-mission.component.css']
})
export class EditMissionComponent implements OnInit {


  mission: any = {};
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private mS:AdminService ,private fb: FormBuilder) { this.createForm();
    }

  createForm(){ this.editForm= this.fb.group
    ({
      type: new FormControl("",[Validators.required]),
      besoin: new FormControl("",[Validators.required]),
      //nombre_preson: new FormControl("",[Validators.required]),
      nom_res: new FormControl("",[Validators.required]),
      lieu: new FormControl("",[Validators.required]),
      date: new FormControl("",[Validators.required]),
      datefin: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),


    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.mS.getMission(params.id).subscribe(res => {
          this.mission = res;
      });
    });
  }

  updateMission(nom_res,type,besoin,description,lieu,date, datefin
    ,id) {
    this.route.params.subscribe(params => {
      this.mS. updateMission(nom_res,type,besoin,lieu,date, datefin,description,
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
      this.router.navigate(['/admin/table-mission']);
    });
  }
}
