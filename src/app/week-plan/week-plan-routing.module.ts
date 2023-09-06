import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeekPlanHomeComponent } from './week-plan-home/week-plan-home.component';

const routes: Routes = [{ path: '', component: WeekPlanHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeekPlanRoutingModule {}
