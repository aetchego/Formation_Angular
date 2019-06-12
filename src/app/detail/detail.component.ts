import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe/recipe.model';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: string;
  recipe: Recipe;

  constructor(private route: ActivatedRoute, private service: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getRecipe(this.id).subscribe(e => this.recipe = e);
  }

  delete() {
    this.service.delete(this.recipe.id).then(() => this.router.navigateByUrl('/recipes'));
  }

}
