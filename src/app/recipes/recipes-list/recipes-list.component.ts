import { Component, OnInit } from '@angular/core';

import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
	recipes: Recipes[] = [
		new Recipes('A Test Recipes', 'This is a simple recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg'),
		new Recipes('A Test Recipes', 'This is a simple recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

}
