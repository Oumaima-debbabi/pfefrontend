import { Component, OnInit } from '@angular/core';
import { EvenementService } from './services/evenement.service';
import { Observable } from 'rxjs';
import { Evenement } from './model/evenement';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  evenements$:Observable<Evenement[]>
  constructor(
    private eventService:EvenementService
  ) { }

  ngOnInit() {

    this.evenements$=this.eventService.getEvenements()


  }


}
