import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisssonDetailsComponent } from './missson-details.component';

describe('MisssonDetailsComponent', () => {
  let component: MisssonDetailsComponent;
  let fixture: ComponentFixture<MisssonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisssonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisssonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
