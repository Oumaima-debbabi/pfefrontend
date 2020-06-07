import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Partenaire } from './model/partenaire';
import { AdminService } from '../admin/services/admin.service';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {

  partenaires: Partenaire[] = [];
  constructor(private partenaireService:AdminService) { }

  partenaires$:Observable<Partenaire[]>
  ngOnInit() {
    this.partenaires$=this.partenaireService.getPartenaires();

  }

}
