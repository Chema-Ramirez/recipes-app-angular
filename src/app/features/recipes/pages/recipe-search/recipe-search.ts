import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecipeApiService } from '../../../../core/services/recipe-api-service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-recipe-search',
  imports: [CommonModule, ProgressSpinnerModule, CardModule, ButtonModule],
  templateUrl: './recipe-search.html',
  styleUrls: ['./recipe-search.scss'],
})
export class RecipeSearch implements OnInit {
  ingredients: string[] = [];
  recipes: any[] = [];
  loading = false;
  errorMsg = '';

  constructor(private route: ActivatedRoute, private recipeService: RecipeApiService) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      const ingParam = params.get('ingredients');
      if (ingParam) {
        this.ingredients = ingParam.split(',');
        this.buscarRecetas();
      }
    });
  }

  buscarRecetas() {
    this.loading = true;
    this.errorMsg = '';
    this.recipeService.getRecipesByIngredients(this.ingredients).subscribe({
      next: (data) => {
        this.recipes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching recipes', err);
        this.errorMsg = 'Ha ocurrido un error al obtener recetas.';
        this.loading = false;
      },
    });
  }
}
