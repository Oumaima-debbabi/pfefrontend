import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { ListeDashComponent } from './liste-dash/liste-dash.component';
import { SecteurComponent } from './secteur/secteur.component';
import { MissionComponent } from './mission/mission.component';
import { TableEvenementComponent } from './table/table-evenement/table-evenement.component';
import { TableMissionComponent } from './table/table-mission/table-mission.component';
import { TableSecteurComponent } from './table/table-secteur/table-secteur.component';
import { TableAssociationsComponent } from './table/table-associations/table-associations.component';
import { TableBenevoleComponent } from './table/table-benevole/table-benevole.component';
import { AssociationComponent } from './association/association.component';
import { EvenementComponent } from './evenement/evenement.component';
import { TablePartenaireComponent } from './table/table-partenaire/table-partenaire.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { EditSecteurComponent } from './edit/edit-secteur/edit-secteur.component';
import { EditMissionComponent } from './edit/edit-mission/edit-mission.component';
import { BenevoleComponent } from './benevole/benevole.component';
import { EditBenevoleComponent } from './edit/edit-benevole/edit-benevole.component';
import { AuthComponent } from './auth/auth.component';
import { GuradGuard } from '../user/gurad.guard';



const routes: Routes = [
  {
    path:"edit-benevole/:id",
    component:EditBenevoleComponent,
    canActivate:[GuradGuard]
  },
  {

    path:"table-benevole",
    component:TableBenevoleComponent,
    canActivate:[GuradGuard]

  },
  {
    path:"benevole",
    component:BenevoleComponent,
    canActivate:[GuradGuard]

  },
  {
    path:"edit-mission/:id",
    component:EditMissionComponent,
    canActivate:[GuradGuard]
  },
  {

    path:"edit-secteur/:id",
    component:EditSecteurComponent,
    canActivate:[GuradGuard]
  },
  {
    path:"partenaire",
    component:PartenaireComponent,

  },
  {
    path:"evenement",
    component:EvenementComponent,
    canActivate:[GuradGuard]
  },
  {path:"association",
component:AssociationComponent,
canActivate:[GuradGuard]
},

  {
    path:"table-benevole",
    component:TableBenevoleComponent,
    canActivate:[GuradGuard]
  },
   {
     path:"table-partenaire",
     component:TablePartenaireComponent,
     canActivate:[GuradGuard]
   },
  {
    path:"table-association",
component:TableAssociationsComponent,
canActivate:[GuradGuard]
  },
  {
path:"table-secteur",
component:TableSecteurComponent,
canActivate:[GuradGuard]
  },
  {
    path:"table-mission",
    component:TableMissionComponent,
    canActivate:[GuradGuard]

  },
  {
    path:"table-event",
    component:TableEvenementComponent,
    canActivate:[GuradGuard]

  },
  {
    path:"evenement",
    component:EvenementComponent,
    canActivate:[GuradGuard]
  },
{
  path:"mission",
  component:MissionComponent,
  canActivate:[GuradGuard]
},
  {path:"profil",
component:ProfilComponent,
canActivate:[GuradGuard]},

{
  path:"liste",
  component:ListeDashComponent,
  canActivate:[GuradGuard]
},

{
  path:"secteur",
  component:SecteurComponent,
canActivate:[GuradGuard]

},
{
  path:"auth",
  component:AuthComponent,
canActivate:[GuradGuard]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
