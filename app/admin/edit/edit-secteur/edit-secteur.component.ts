import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Admin } from '../../model/admin';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-edit-secteur',
  templateUrl: './edit-secteur.component.html',
  styleUrls: ['./edit-secteur.component.css']
})
export class EditSecteurComponent implements OnInit {
currentUser:Admin
  secteur: any = {};
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private sS:AdminService ,private fb: FormBuilder,
    private userS:UserService) { this.createForm();
    }

  createForm(){ this.editForm= this.fb.group
    ({
      type_activite: new FormControl("",[Validators.required])
    });
  }


  ngOnInit() {
    this.currentUser=this.userS.currentUserValue
    this.route.params.subscribe(params => {
        this.sS.getSecteur(params.id).subscribe(res => {
          this.secteur = res;
      });
    });
  }

  updateSecteur(type_activite, id) {
    this.route.params.subscribe(params => {
      this.sS.updateSecteur(type_activite,params.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'Secteur modifié'

      })
      this.router.navigate(['/admin/table-secteur']);
    });
  }
}

