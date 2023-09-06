import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddNewRecipeRoutingModule } from './add-new-recipe-routing.module';
import { AddNewRecipeHomeComponent } from './add-new-recipe-home/add-new-recipe-home.component';
import { RecipeInfoComponent } from './recipe-info/recipe-info.component';
import { IngredientInfoComponent } from './ingredient-info/ingredient-info.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AddNewRecipeHomeComponent,
    RecipeInfoComponent,
    IngredientInfoComponent,
  ],
  imports: [CommonModule, AddNewRecipeRoutingModule, SharedModule],
})
export class AddNewRecipeModule {}
