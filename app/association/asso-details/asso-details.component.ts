import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-asso-details',
  templateUrl: './asso-details.component.html',
  styleUrls: ['./asso-details.component.css']
})
export class AssoDetailsComponent implements OnInit {
  association: any={}
  constructor(
    private route:ActivatedRoute,
    private sS:AdminService,

  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sS.getAssociation(params.id).subscribe(res => {
        this.association= res;
      });
    });
  }

  }

