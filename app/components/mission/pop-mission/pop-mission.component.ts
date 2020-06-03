import { Component, OnInit } from '@angular/core';
import { MissionService } from '../service/mission.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Association } from 'src/app/association/model/association';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Mission } from '../model/mission';

@Component({
  selector: 'app-pop-mission',
  templateUrl: './pop-mission.component.html',
  styleUrls: ['./pop-mission.component.css']
})
export class PopMissionComponent implements OnInit {
  mission: any = {};
  editForm: FormGroup;
  constructor( private route: ActivatedRoute, private router: Router,
    private mS:MissionService ,private fb: FormBuilder) { this.createForm();
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
      qd: new FormControl("",[Validators.required]),
      sujet: new FormControl("",[Validators.required]),


    });
  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      this.mS.getMission(params.id).subscribe(res => {
        this.mission = res;
    });
  });
  }


}

