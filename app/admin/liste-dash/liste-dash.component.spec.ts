import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDashComponent } from './liste-dash.component';

describe('ListeDashComponent', () => {
  let component: ListeDashComponent;
  let fixture: ComponentFixture<ListeDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
