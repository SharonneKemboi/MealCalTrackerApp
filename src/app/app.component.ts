import { Component } from '@angular/core';
import { Meals } from './meals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public masterMealList: Meals[] = [
	]


	/* A function to add a new meal to the array */
	addMeal(newMealFromChild:Meals){
		this.masterMealList.unshift(newMealFromChild);

	}
}
