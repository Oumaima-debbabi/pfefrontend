import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePropositionsComponent } from './table-propositions.component';

describe('TablePropositionsComponent', () => {
  let component: TablePropositionsComponent;
  let fixture: ComponentFixture<TablePropositionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePropositionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePropositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
