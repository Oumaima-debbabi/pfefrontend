import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBenevoleComponent } from './edit-benevole.component';

describe('EditBenevoleComponent', () => {
  let component: EditBenevoleComponent;
  let fixture: ComponentFixture<EditBenevoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBenevoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBenevoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
