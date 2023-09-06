import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  ingredients: string[] = [];

  addIngredient(ingredient: string) {
    this.ingredients.push(ingredient);
  }

  getIngredients() {
    return this.ingredients;
  }
}
