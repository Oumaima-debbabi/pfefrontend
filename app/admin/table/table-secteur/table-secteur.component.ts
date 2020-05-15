import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Secteur } from 'src/app/secteur/model/secteur';
import { Subscription, Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user/service/user.service';

@Component({
  selector: 'app-table-secteur',
  templateUrl: './table-secteur.component.html',
  styleUrls: ['./table-secteur.component.css']
})
export class TableSecteurComponent implements OnInit {
  id;
 secteurSub$: Subscription;
 secteur:Secteur;
  Secteurs$: Observable<Secteur[]>;
  secteurs;
  cesecteur=null;
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
    this.Secteurs$ = this.secteurService.getSecteurs();
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



  }

