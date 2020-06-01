import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Section1Component } from './components/section1/section1.component';
import { ShowallComponent } from './components/showall/showall.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import{
  MatCheckboxModule,
  MatRadioModule,
  MatButtonModule,
  MatCardModule

  }from '@angular/material';
  import{AgmCoreModule} from '@agm/core';

import { LoginComponent } from './login/login.component';
import { SecteurComponent } from './secteur/secteur.component';
import { MissionComponent } from './components/mission/mission.component';
import { MisssonDetailsComponent } from './components/mission/missson-details/missson-details.component';
import { FooterComponent } from './components/footer/footer.component';
import { AssociationsComponent } from './association/associations/associations.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AdminComponent } from './admin/admin.component';
import { Section2Component } from './components/section2/section2.component';
import { EvenementComponent } from './evenement/evenement.component';
import { PartenaireComponent } from './partenaire/partenaire.component';
import { GuradGuard } from './user/gurad.guard';
import { PopMissionComponent } from './components/mission/pop-mission/pop-mission.component';


//import { ToastComponent } from './toast/toast.component';


  const material=[
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatCardModule

  ]

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    ShowallComponent,
    LoginComponent,
    SecteurComponent,
    MissionComponent,
    MisssonDetailsComponent,
    FooterComponent,
    AssociationsComponent,
    GoogleMapComponent,
    AdminComponent,
    Section2Component,
    EvenementComponent,
    PartenaireComponent,
    PopMissionComponent,

    //ToastComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAQqpNML7B0nu0yBtzvXhVMgtz4neSU-EE',
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
