import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Validators, FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-partenaire',
  templateUrl: './edit-partenaire.component.html',
  styleUrls: ['./edit-partenaire.component.css']
})
export class EditPartenaireComponent implements OnInit {
imageUrl:string=''
  partenaire: any = {};
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router,
    private mS:AdminService ,private fb: FormBuilder) { this.createForm();
    }

  createForm(){ this.editForm= this.fb.group
    ({
      imageUrl: new FormControl("",[Validators.required]),
      nom: new FormControl("",[Validators.required]),


    });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
        this.mS.getPartenaire(params.id).subscribe(res => {
          this.partenaire = res;
      });
    });
  }

  update(nom,imageUrl
    ,id) {
    this.route.params.subscribe(params => {
      this.mS.editPartenaire(nom,imageUrl,
        params.id);
      const Toast = Swal.mixin({
        toast: true,
        position: 'center',
        showConfirmButton: true,
        timer: 3000
      });
      Toast.fire({
  title:'partenaire modifiée'

      })
      this.router.navigate(['/admin/table-partenaire']);
    });
  }
  uploadImage(event) {
    this.mS.uploadImage(event.target.files[0])
      .subscribe((res: any) => {
        this.imageUrl = res.imageUrl
      })
  }
}
