import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInterviewDetailsComponent } from './update-interview-details.component';

describe('UpdateInterviewDetailsComponent', () => {
  let component: UpdateInterviewDetailsComponent;
  let fixture: ComponentFixture<UpdateInterviewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInterviewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInterviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
