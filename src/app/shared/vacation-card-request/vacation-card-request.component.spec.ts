import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationCardRequestComponent } from './vacation-card-request.component';

describe('VacationCardRequestComponent', () => {
  let component: VacationCardRequestComponent;
  let fixture: ComponentFixture<VacationCardRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationCardRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationCardRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
