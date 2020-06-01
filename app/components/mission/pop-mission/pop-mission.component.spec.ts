import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopMissionComponent } from './pop-mission.component';

describe('PopMissionComponent', () => {
  let component: PopMissionComponent;
  let fixture: ComponentFixture<PopMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
