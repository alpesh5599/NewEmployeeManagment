import { TestBed } from '@angular/core/testing';

import { SetInterviewService } from './set-interview.service';

describe('SetInterviewService', () => {
  let service: SetInterviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetInterviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
