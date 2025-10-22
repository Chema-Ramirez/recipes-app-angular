import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeApiService {
  private apiUrl = 'https://api.spoonacular.com/recipes';
  private apiKey = 'c0489610aa6e48eabf59b194be885714';

  constructor(private http: HttpClient) {}

  getRecipesByIngredients(ingredients: string[]): Observable<any> {
    const params = new HttpParams()
      .set('ingredients', ingredients.join(','))
      .set('number', '10')
      .set('apiKey', this.apiKey);

    return this.http.get(`${this.apiUrl}/findByIngredients`, { params });
  }
}
