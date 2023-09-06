import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesListHomeComponent } from './recipes-list-home/recipes-list-home.component';

const routes: Routes = [{ path: '', component: RecipesListHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipesListRoutingModule {}
