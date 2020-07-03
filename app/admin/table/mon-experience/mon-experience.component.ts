import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { Experience } from '../../model/experience';
import { EditExperienceComponent } from '../../edit/edit-experience/edit-experience.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-mon-experience',
  templateUrl: './mon-experience.component.html',
  styleUrls: ['./mon-experience.component.css']
})
export class MonExperienceComponent implements OnInit {
  experiences;
  experience:any;
  constructor( private ex:AdminService, private router:ActivatedRoute,private route:Router,
    private  dialog: MatDialog) { }
  expriences$: Observable<Experience[]>;
  ngOnInit() {

    this.expriences$= this.ex.getExperiences();
  }
  onCreate(experience) {
    this.router.params.subscribe(params=> {

      this.ex.getExperience(params.experience).subscribe(res => {
        this.experience = res;
    });
  });

  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
   dialogConfig.width = "60%";
    //this.dialog.open(PopMissionComponent,dialogConfig);

    this.dialog.open(EditExperienceComponent, {
      data:experience,
  width:"720px"

    })
  console.log(experience)


  }
  delete(experience){
    let m=confirm("Êtes-vous sûr de supprimer ce champ !!!?")
    if(!m){
      return;
    }
     this.ex.deleteEx(experience).subscribe( data => {
      console.log(data)
       this.experiences=data;
        console.log(data);
        this.route.navigate[("/monexperience")];

  })

  }
}
