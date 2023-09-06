import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingListHomeComponent } from './shopping-list-home/shopping-list-home.component';

const routes: Routes = [{ path: '', component: ShoppingListHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListRoutingModule {}
