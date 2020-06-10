import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositionsAfficheComponent } from './propositions-affiche.component';

describe('PropositionsAfficheComponent', () => {
  let component: PropositionsAfficheComponent;
  let fixture: ComponentFixture<PropositionsAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositionsAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositionsAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
