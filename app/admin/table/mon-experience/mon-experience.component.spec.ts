import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonExperienceComponent } from './mon-experience.component';

describe('MonExperienceComponent', () => {
  let component: MonExperienceComponent;
  let fixture: ComponentFixture<MonExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
