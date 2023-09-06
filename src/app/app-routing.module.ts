import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'addnewrecipe',
    loadChildren: () =>
      import('./add-new-recipe/add-new-recipe.module').then(
        (m) => m.AddNewRecipeModule
      ),
  },
  {
    path: 'recipeslist',
    loadChildren: () =>
      import('./recipes-list/recipes-list.module').then(
        (m) => m.RecipesListModule
      ),
  },
  {
    path: 'shoppinglist',
    loadChildren: () =>
      import('./shopping-list/shopping-list.module').then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: 'weekplan',
    loadChildren: () =>
      import('./week-plan/week-plan.module').then((m) => m.WeekPlanModule),
  },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
