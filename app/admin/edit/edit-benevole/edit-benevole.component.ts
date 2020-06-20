import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { Association } from 'src/app/association/model/association';
import { AdminModule } from '../../admin.module';

@Component({
  selector: 'app-edit-benevole',
  templateUrl: './edit-benevole.component.html',
  styleUrls: ['./edit-benevole.component.css']
})
export class EditBenevoleComponent implements OnInit {
  benevole: any = {};
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private bS:AdminService ,private fb: FormBuilder,
    private aService:AdminService) { this.createForm();
    }

  createForm(){ this.editForm= this.fb.group
    ({
      civilite: new FormControl("",[Validators.required]),
      name: new FormControl("",[Validators.required]),
      association: new FormControl("",[Validators.required]),
      email: new FormControl("",[Validators.required]),
      prenom: new FormControl("",[Validators.required]),
      adresse: new FormControl("",[Validators.required]),
      numero_telephone: new FormControl("",[Validators.required]),
      code_postal: new FormControl("",[Validators.required]),
      annee_naissance: new FormControl("",[Validators.required]),
      profession :new FormControl("",[Validators.required])
    });
  }

  associations$:Observable<Association[]>
  ngOnInit() {
    this.associations$ =this.aService.getAssociations()

    this.route.params.subscribe(params => {
        this.bS.getBenevole(params.id).subscribe(res => {
          this.benevole = res;
      });
    });
  }

  updateBenevole( name, prenom,association,profession,email, civilite, adresse, code_postal,numero_telephone,annee_naissance, id) {
    this.route.params.subscribe(params => {
      this.bS.updateBenevole(name, prenom,association,profession, email,civilite, adresse, code_postal,numero_telephone,annee_naissance,params.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'benevole modifié avec succés'

      })
      this.router.navigate(['/admin/table-benevole']);
    });
  }
}

