import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationCardLeaveComponent } from './vacation-card-leave.component';

describe('VacationCardLeaveComponent', () => {
  let component: VacationCardLeaveComponent;
  let fixture: ComponentFixture<VacationCardLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationCardLeaveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationCardLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
