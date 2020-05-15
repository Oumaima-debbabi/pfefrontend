import { TestBed, async, inject } from '@angular/core/testing';

import { GuradGuard } from './gurad.guard';

describe('GuradGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuradGuard]
    });
  });

  it('should ...', inject([GuradGuard], (guard: GuradGuard) => {
    expect(guard).toBeTruthy();
  }));
});
