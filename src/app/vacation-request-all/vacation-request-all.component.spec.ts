import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationRequestAllComponent } from './vacation-request-all.component';

describe('VacationRequestAllComponent', () => {
  let component: VacationRequestAllComponent;
  let fixture: ComponentFixture<VacationRequestAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacationRequestAllComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacationRequestAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
