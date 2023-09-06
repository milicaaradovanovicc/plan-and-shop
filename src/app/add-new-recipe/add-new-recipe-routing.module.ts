import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewRecipeHomeComponent } from './add-new-recipe-home/add-new-recipe-home.component';

const routes: Routes = [{ path: '', component: AddNewRecipeHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewRecipeRoutingModule {}
