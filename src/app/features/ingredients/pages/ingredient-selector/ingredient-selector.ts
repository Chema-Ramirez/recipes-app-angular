import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';

@Component({
  standalone: true,
  selector: 'app-ingredient-selector',
  imports: [CommonModule, FormsModule, MultiSelectModule, ButtonModule],
  templateUrl: './ingredient-selector.html',
  styleUrls: ['./ingredient-selector.scss'],
})
export class IngredientSelector {
  availableIngredients = [
    { label: 'Tomate', value: 'tomato' },
    { label: 'Queso', value: 'cheese' },
    { label: 'Pollo', value: 'chicken' },
    { label: 'Pan', value: 'bread' },
  ];

  selectedIngredients: string[] = [];

  constructor(private router: Router) {}

  buscarRecetas() {
    if (this.selectedIngredients.length > 0) {
      this.router.navigate(['/recipes'], {
        queryParams: { ingredients: this.selectedIngredients.join(',') },
      });
    }
  }
}
