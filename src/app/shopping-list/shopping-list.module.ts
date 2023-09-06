import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListHomeComponent } from './shopping-list-home/shopping-list-home.component';
import { GeneratedShoppingListComponent } from './generated-shopping-list/generated-shopping-list.component';
import { CustomShoppingListComponent } from './custom-shopping-list/custom-shopping-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListHomeComponent,
    GeneratedShoppingListComponent,
    CustomShoppingListComponent,
  ],
  imports: [CommonModule, ShoppingListRoutingModule, SharedModule],
})
export class ShoppingListModule {}
