import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog, DialogPosition } from '@angular/material';
import { MessagesComponent } from 'src/app/messages/messages.component';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
x:any
  constructor( private dialog:MatDialog) { }

  ngOnInit() {
  }
  onCreate() {
const dialogPosition:DialogPosition={
  top:'30px',
  right:'350px'
};
const dialogRef=this.dialog.open(MessagesComponent,{
  width:'540px',
  position:dialogPosition
})

  }
}
