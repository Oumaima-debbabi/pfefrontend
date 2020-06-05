import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowallComponent } from './components/showall/showall.component';
import { LoginComponent } from './login/login.component';
import { MisssonDetailsComponent } from './components/mission/missson-details/missson-details.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AssociationsComponent } from './association/associations/associations.component';
import { GuradGuard } from './user/gurad.guard';
import {Role} from './admin/model/role'
import { GoogleMapComponent } from './google-map/google-map.component';
import { PopMissionComponent } from './components/mission/pop-mission/pop-mission.component';
import { AssoDetailsComponent } from './association/asso-details/asso-details.component';
const routes: Routes = [
  {path:"",component:ShowallComponent},
  {path:"login",component:LoginComponent},
  {path:"mission-details",component:MisssonDetailsComponent},
  {path:"associations",component:AssociationsComponent},
{  path: "",
  redirectTo: "admin",
  pathMatch: "full",

},
{
  path:"association/:id",
  component:AssoDetailsComponent
},
{
  path:"admin",
  loadChildren:()=> import("./admin/admin.module").then(m=>m.AdminModule),
  canActivate:[GuradGuard],
  data: { roles: [Role.Admin] }
},
  {
    path: "user",
    loadChildren:()=> import("./user/user.module").then(m=>m.UserModule)
  },
  {
path:"map",
component:GoogleMapComponent
  },

  {
    path: "association",
    loadChildren:()=> import("./association/association.module").then(m=>m.AssociationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BsDatepickerModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
