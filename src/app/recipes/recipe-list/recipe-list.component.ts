import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy description', 'http://www.hopeclubhouse.org/wp-content/uploads/2015/07/profile-picture-placeholder.png')
  constructor() { }

  ngOnInit() {
  }

}
