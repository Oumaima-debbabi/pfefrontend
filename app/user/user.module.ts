import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RegisterComponent } from './register/register.component';

import { UserRoutingModule } from "./user-routing.module";

import{
  MatCheckboxModule,
  MatRadioModule,
  MatButtonModule,
MatDialog,
MatDialogConfig,

MatToolbarModule,
MatExpansionModule,
MatProgressSpinnerModule,
MatPaginatorModule

  } from '@angular/material'
import { ComplementsComponent } from './complements/complements.component';

@NgModule({
  declarations: [RegisterComponent,ComplementsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
     MatCheckboxModule,
     MatRadioModule,
     MatButtonModule,
     MatToolbarModule,
     MatExpansionModule,
     MatProgressSpinnerModule,
     MatPaginatorModule]
})

export class UserModule
{
}
