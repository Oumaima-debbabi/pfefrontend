import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPropositionsComponent } from './all-propositions.component';

describe('AllPropositionsComponent', () => {
  let component: AllPropositionsComponent;
  let fixture: ComponentFixture<AllPropositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPropositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPropositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
