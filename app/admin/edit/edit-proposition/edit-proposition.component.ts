import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropositionService } from 'src/app/services/proposition.service';
import Swal from 'sweetalert2';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-edit-proposition',
  templateUrl: './edit-proposition.component.html',
  styleUrls: ['./edit-proposition.component.css']
})
export class EditPropositionComponent implements OnInit {

currentUser:Admin
  mission: any = {};
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,private userS:UserService,
    private mS:PropositionService ,private fb: FormBuilder) { this.createForm();
    }

  createForm(){ this.editForm= this.fb.group
    ({
      type: new FormControl("",[Validators.required]),
      titre: new FormControl("",[Validators.required]),
      etat: new FormControl("",[Validators.required]),

      lieu: new FormControl("",[Validators.required]),
      precision: new FormControl("",[Validators.required]),
      description: new FormControl("",[Validators.required]),


    });
  }


  ngOnInit() {
    this.currentUser=this.userS.currentUserValue
    this.route.params.subscribe(params => {
        this.mS.getProposition(params.id).subscribe(res => {
          this.mission = res;

      });
    });
  }

  updateMission( titre,type,description,lieu,etat, precision
    ,id) {
    this.route.params.subscribe(params => {
      this.mS.updateProposition( titre,type,description,lieu,etat, precision,
        params.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'Proposition  modifiée'

      })
      this.router.navigate(['/admin/table-propositions']);
    });
  }
}
