import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Secteur } from 'src/app/secteur/model/secteur';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';
import { Admin } from '../../model/admin';

@Component({
  selector: 'app-table-secteur',
  templateUrl: './table-secteur.component.html',
  styleUrls: ['./table-secteur.component.css']
})
export class TableSecteurComponent implements OnInit {
  id;
  type_activite:string;
 secteurSub$: Subscription;
 secteur:Secteur;
  Secteurs$: Observable<Secteur[]>;
  secteurs;
  secteurss: Secteur[]
  cesecteur=null;
  currentUser:Admin
showForm:boolean;
rows = [];
temp = [];
editing = {};
  constructor(private secteurService: AdminService,
    private route:Router,
    private router: ActivatedRoute,
    private userService:UserService) {}
    editSecteurForm = new FormGroup({

      type_activite: new FormControl("", [Validators.required]),

    });
    showEdit() {
      this.showForm = !this.showForm;
    }
  ngOnInit() {

    this.currentUser=this.userService.currentUserValue
    this.secteurs = this.secteurService.getSecteurs();
//this.secteurss = this.secteurs

    }

    delete(id){
      let m=confirm("Êtes-vous sûr de supprimer ce champ !!!?")
      if(!m){
        return;
      }

        return this.secteurService.deleteSecteur(id).subscribe( data => {
          console.log(data)
         this.secteurs=data;
          console.log(data);
          this.route.navigate[("/table-secteur")];

  })
    }
    editSecteur(id) {
      this.id = this.router.snapshot.paramMap.get("id");
      if (this.editSecteurForm.valid) {
        this.secteurService
          .editSecteur(this.editSecteurForm.value, this.id)
          .subscribe(res => {
            this.editSecteurForm.reset();
            this.route.navigate(["/table-secteur"]);
          });
      }
    }

search(){
  this.secteurs=this.secteurs.filter(res=>{
    return res.type_activite.toLocaleLowerCase().match
    (this.type_activite.toLocaleLowerCase())
  })
}

  }

