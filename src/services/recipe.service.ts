import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from 'src/app/recipe/recipe.model';
import { HttpClient } from '@angular/common/http';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>('http://10.0.1.64:8080/api/v1/recipes');
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>('http://10.0.1.64:8080/api/v1/recipes/' + id);
  }

  create(recipe: Recipe): Promise<number> {
    return this.http.post<number>('http://10.0.1.64:8080/api/v1/recipes/', recipe).toPromise();
  }

  delete(id: number): Promise<void> {
    return this.http.delete<void>('http://10.0.1.64:8080/api/v1/recipes/' + id).toPromise();
  }
}
