import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { Recipe } from '../recipe/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes = [] as Recipe[];

  constructor(private service: RecipeService) {
  }

  load() {
    this.service.getRecipes().subscribe(e => this.recipes = e);
  }

  ngOnInit(): void {
    this.load();
  }

  delete(id: number) {
      this.service.delete(id).then(() => this.load());
  }
}
