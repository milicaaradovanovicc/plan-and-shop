import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekPlanHomeComponent } from './week-plan-home.component';

describe('WeekPlanHomeComponent', () => {
  let component: WeekPlanHomeComponent;
  let fixture: ComponentFixture<WeekPlanHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekPlanHomeComponent]
    });
    fixture = TestBed.createComponent(WeekPlanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
