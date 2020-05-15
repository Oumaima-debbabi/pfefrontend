import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBenevoleComponent } from './table-benevole.component';

describe('TableBenevoleComponent', () => {
  let component: TableBenevoleComponent;
  let fixture: ComponentFixture<TableBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
