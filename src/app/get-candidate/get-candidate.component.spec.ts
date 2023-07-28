import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCandidateComponent } from './get-candidate.component';

describe('GetCandidateComponent', () => {
  let component: GetCandidateComponent;
  let fixture: ComponentFixture<GetCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetCandidateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
