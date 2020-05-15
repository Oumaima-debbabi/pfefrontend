import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAssociationsComponent } from './table-associations.component';

describe('TableAssociationsComponent', () => {
  let component: TableAssociationsComponent;
  let fixture: ComponentFixture<TableAssociationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAssociationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAssociationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
