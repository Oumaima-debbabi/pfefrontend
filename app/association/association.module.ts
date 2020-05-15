import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRoutingModule } from './association-routing.module';
import { RegistrationComponent } from './registration/registration.component';


import{
  MatCheckboxModule,
  MatRadioModule,
  MatButtonModule,


MatToolbarModule,
MatIconModule,
MatBadgeModule,
MatSidenavModule,
MatListModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,

MatDatepickerModule,
MatNativeDateModule,
MatChipsModule,
MatTooltipModule,
MatTableModule,
MatPaginatorModule

  } from '@angular/material'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,

MatToolbarModule,
MatIconModule,
MatBadgeModule,
MatSidenavModule,
MatListModule,
MatGridListModule,
MatFormFieldModule,
MatInputModule,
MatSelectModule,

MatDatepickerModule,
MatNativeDateModule,
MatChipsModule,
MatTooltipModule,
MatTableModule,
MatPaginatorModule

  ]
})
export class AssociationModule { }
