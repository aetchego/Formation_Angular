import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe;

  @Output()
  delete: EventEmitter<void> = new EventEmitter();

  visible = false;

  constructor() { }

  ngOnInit() {
  }

  toggleVisible() {
    this.visible = !this.visible;
  }

}
