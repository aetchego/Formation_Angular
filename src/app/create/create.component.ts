import { Router } from '@angular/router';
import { RecipeIngredient } from './../recipe/RecipeIngredient.model';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/services/recipe.service';
import { Recipe } from '../recipe/recipe.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  ingredients: RecipeIngredient[] =
  [{ingredient: {name: 'Apple'}, quantity: 100, unit: 'g'},
  {ingredient: {name: 'Vodka'}, quantity: 20, unit: 'cl'},
  {ingredient: {name: 'Banana'}, quantity: 200, unit: 'g'},
  {ingredient: {name: 'Rhum'}, quantity: 20, unit: 'cl'},
  {ingredient: {name: 'Orange'}, quantity: 100, unit: 'g'}];

  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    picture: new FormControl(''),
    ingredients: new FormControl('')
  });

  constructor(private service: RecipeService, private router: Router) { }

  ngOnInit() {
  }

  create() {
    console.log(this.form.value);
    this.service.create(this.form.value).then(() => this.router.navigate(['/recipes']));
  }

}
