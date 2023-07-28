import { TestBed } from '@angular/core/testing';

import { TimesheetDashboardService } from './timesheet-dashboard.service';

describe('TimesheetDashboardService', () => {
  let service: TimesheetDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesheetDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
