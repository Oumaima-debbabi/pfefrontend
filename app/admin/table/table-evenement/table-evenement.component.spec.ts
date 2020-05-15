import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEvenementComponent } from './table-evenement.component';

describe('TableEvenementComponent', () => {
  let component: TableEvenementComponent;
  let fixture: ComponentFixture<TableEvenementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEvenementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
