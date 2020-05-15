import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePartenaireComponent } from './table-partenaire.component';

describe('TablePartenaireComponent', () => {
  let component: TablePartenaireComponent;
  let fixture: ComponentFixture<TablePartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
