import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProfilComponent } from './profil/profil.component';
import { ListeDashComponent } from './liste-dash/liste-dash.component';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatSlideToggleModule,
  MatButtonModule,
  MatButtonToggleModule, MatCardModule, MatCheckboxModule,MatRadioModule, MatDialogModule, MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatMenuModule, MatProgressBarModule,
  MatSidenavModule, MatTabsModule, MatToolbarModule,MatSelectModule
} from "@angular/material";
import { LoginComponent } from './login/login.component';
import { SecteurComponent } from './secteur/secteur.component';
import { MissionComponent } from './mission/mission.component';
import { EvenementComponent } from './evenement/evenement.component';
import { TableEvenementComponent } from './table/table-evenement/table-evenement.component';
import { TableMissionComponent } from './table/table-mission/table-mission.component';
import { TableSecteurComponent } from './table/table-secteur/table-secteur.component';
import { TableAssociationsComponent } from './table/table-associations/table-associations.component';
import { TableBenevoleComponent } from './table/table-benevole/table-benevole.component';
import { AssociationComponent } from './association/association.component';

import { PartenaireComponent } from './partenaire/partenaire.component';
import { TablePartenaireComponent } from './table/table-partenaire/table-partenaire.component';
import { EditSecteurComponent } from './edit/edit-secteur/edit-secteur.component';
import { EditPartenaireComponent } from './edit/edit-partenaire/edit-partenaire.component';
import { EditMissionComponent } from './edit/edit-mission/edit-mission.component';
import { BenevoleComponent } from './benevole/benevole.component';
import { EditBenevoleComponent } from './edit/edit-benevole/edit-benevole.component';
import { AuthComponent } from './auth/auth.component';
import { GuradGuard } from '../user/gurad.guard';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { EditProfilComponent } from './edit/edit-profil/edit-profil.component';
import { ActionsComponent } from './actions/actions.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { TablePropositionsComponent } from './table/table-propositions/table-propositions.component';
import { TableActionsComponent } from './table/table-actions/table-actions.component';
import { EditPropositionComponent } from './edit/edit-proposition/edit-proposition.component';
import { PropositionsAfficheComponent } from './propositions-affiche/propositions-affiche.component';
import { TableActionComponent } from './table/table-action/table-action.component';
import { ParticipantsComponent } from './table/participants/participants.component';
import { AllMissionComponent } from './table/all-mission/all-mission.component';
import { AllPropositionsComponent } from './table/all-propositions/all-propositions.component';
import { EditAssociationComponent } from './edit/edit-association/edit-association.component';

@NgModule({
  declarations: [ProfilComponent, ListeDashComponent, LoginComponent, SecteurComponent, MissionComponent, EvenementComponent, TableEvenementComponent,TableMissionComponent, TableSecteurComponent, TableAssociationsComponent, TableBenevoleComponent, AssociationComponent,
     PartenaireComponent, TablePartenaireComponent, EditSecteurComponent,
     EditPartenaireComponent, EditMissionComponent, BenevoleComponent, EditBenevoleComponent,
    EditProfilComponent,
     AuthComponent, AdhesionComponent, ActionsComponent, PropositionsComponent, TablePropositionsComponent, TableActionsComponent, EditPropositionComponent, PropositionsAfficheComponent, TableActionComponent, ParticipantsComponent, AllMissionComponent, AllPropositionsComponent, EditAssociationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatSlideToggleModule,
    MatInputModule,
    MatListModule, MatMenuModule, MatProgressBarModule,
    MatSidenavModule, MatTabsModule, MatToolbarModule,
    ReactiveFormsModule,
    MatSelectModule,

    MatRadioModule,


  ]
,

providers: [GuradGuard],
})
export class AdminModule { }
