import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ComplementsComponent } from './complements/complements.component';

const routes: Routes = [

  {path:"register",
component:RegisterComponent},
{
  path:"informations",
  component:ComplementsComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
