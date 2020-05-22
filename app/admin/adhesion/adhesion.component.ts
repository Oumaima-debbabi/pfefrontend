import { Component, OnInit } from '@angular/core';
//import * as jsPDF from 'jspdf';
import { UserService } from 'src/app/user/service/user.service';
import { User } from 'src/app/user/model/user';
import { Admin } from '../model/admin';
import * as html2pdf from 'html2pdf.js'

@Component({
  selector: 'app-adhesion',
  templateUrl: './adhesion.component.html',
  styleUrls: ['./adhesion.component.css']
})
export class AdhesionComponent implements OnInit {
  currentUser:Admin
  constructor(private userS:UserService) { }

  ngOnInit() {

this.currentUser=this.userS.currentUserValue;
  }
// downloawdPDF(){
//   const doc=new jsPDF;
//   doc.text('Adhésion de participation',10,10);
//   doc.save('adhésion.pdf')
// }
downlowd(){
  const options={
    filename:'adhesion.pdf',
    image:{type:'jpeg'},
     html2canvas:{},
     jsPDF:{orientation:'landscape'}

  };
const content:Element=document.getElementById('element');
html2pdf()
.from(content)
.set(options)
.save();
}
}

