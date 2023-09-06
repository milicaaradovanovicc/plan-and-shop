import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesListRoutingModule } from './recipes-list-routing.module';
import { OpenedRecipeComponent } from './opened-recipe/opened-recipe.component';
import { RecipesListHomeComponent } from './recipes-list-home/recipes-list-home.component';
import { ListItemComponent } from './list-item/list-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OpenedRecipeComponent,
    RecipesListHomeComponent,
    ListItemComponent,
  ],
  imports: [CommonModule, RecipesListRoutingModule, SharedModule],
})
export class RecipesListModule {}
