import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeekPlanRoutingModule } from './week-plan-routing.module';
import { WeekTableComponent } from './week-table/week-table.component';
import { WeekPlanHomeComponent } from './week-plan-home/week-plan-home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WeekTableComponent, WeekPlanHomeComponent],
  imports: [CommonModule, WeekPlanRoutingModule, SharedModule],
})
export class WeekPlanModule {}
