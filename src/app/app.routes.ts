import { Routes } from '@angular/router';
import { IngredientSelector } from './features/ingredients/pages/ingredient-selector/ingredient-selector';
import { RecipeSearch } from './features/recipes/pages/recipe-search/recipe-search';

export const routes: Routes = [
  {
    path: 'ingredients',
    component: IngredientSelector,
  },
  {
    path: 'recipes',
    component: RecipeSearch,
  },
  { path: '', redirectTo: 'ingredients', pathMatch: 'full' },
  { path: '**', redirectTo: 'ingredients' },
];
