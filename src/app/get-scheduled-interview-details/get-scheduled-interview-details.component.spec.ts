import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetScheduledInterviewDetailsComponent } from './get-scheduled-interview-details.component';

describe('GetScheduledInterviewDetailsComponent', () => {
  let component: GetScheduledInterviewDetailsComponent;
  let fixture: ComponentFixture<GetScheduledInterviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetScheduledInterviewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetScheduledInterviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
