import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { Partenaire } from 'src/app/partenaire/model/partenaire';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { UserService } from 'src/app/user/service/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-partenaire',
  templateUrl: './table-partenaire.component.html',
  styleUrls: ['./table-partenaire.component.css']
})
export class TablePartenaireComponent implements OnInit {

id;
partenaireSub$: Subscription;
partenaire:Partenaire;
Partenaires$: Observable<Partenaire[]>
partenaires;
cepartenaire=null;
showForm:boolean;
rows = [];
temp = [];
editing = {};
constructor(private partenaireService: AdminService,
  private route:Router,
  private router: ActivatedRoute,
  private userService:UserService) {}
  editpartenaireForm = new FormGroup({

    type_activite: new FormControl("", [Validators.required]),

  });
  showEdit() {
    this.showForm = !this.showForm;
  }
ngOnInit() {
  this.Partenaires$ = this.partenaireService.getPartenaires();
  }

  delete(id){
    let m=confirm("Êtes-vous sûr de supprimer cette candidat !!!?")
    if(!m){
      return;
    }

      return this.partenaireService.deletePartenaire(id).subscribe( data => {
        console.log(data)
       this.partenaires=data;
        console.log(data);
        this.route.navigate[("/table-partenaire")];

})
  }
  editpartenaire(id) {
    this.id = this.router.snapshot.paramMap.get("id");
    if (this.editpartenaireForm.valid) {
      this.partenaireService
        .editPartenaire(this.editpartenaireForm.value, this.id)
        .subscribe(res => {
          this.editpartenaireForm.reset();
          this.route.navigate(["/table-partenaire"]);
        });
    }
  }



}


