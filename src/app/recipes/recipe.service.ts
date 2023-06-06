import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'A super tasty Schnitzel',
      'https://www.thespruceeats.com/thmb/BS5BdyQsGh5qQyRiuZMannmcxoY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-wiener-schnitzel-recipe-1447089-hero-02-18827aac4cbd4aec926350d4f9778e70.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    ),
    new Recipe(
      'Hamburger',
      'Bacon Cheeseburger',
      'https://www.simplyrecipes.com/thmb/cgJTtVSTy-ftI1dBM4P2x2FJf14=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Bacon-Cheeseburger-LEAD-2b-6606850da0164612b5fb406a0e33f8df.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
