import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSecteurComponent } from './table-secteur.component';

describe('TableSecteurComponent', () => {
  let component: TableSecteurComponent;
  let fixture: ComponentFixture<TableSecteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSecteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
