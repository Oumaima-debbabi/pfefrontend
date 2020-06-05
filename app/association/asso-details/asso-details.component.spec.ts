import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoDetailsComponent } from './asso-details.component';

describe('AssoDetailsComponent', () => {
  let component: AssoDetailsComponent;
  let fixture: ComponentFixture<AssoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
