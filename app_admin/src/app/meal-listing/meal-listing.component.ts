import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { rooms } from '../data/rooms';
import { MealDataService } from '../services/meal-data.service';
import { Meal } from '../models/meal';
import { AuthenticationService } from '../authentication';

@Component({
  selector: 'app-meal-listing',
  templateUrl: './meal-listing.component.html',
  styleUrls: ['./meal-listing.component.css'],
  providers: [MealDataService]
})
export class MealListingComponent implements OnInit {

  //rooms: Array<any> = rooms;
  meals: Meal[];

  message: string;
  
  constructor(
    private mealDataService: MealDataService,
    private authService: AuthenticationService,
    private router: Router
    ) { }

  private addMeal(): void {
    this.router.navigate(['add-meal']);
  }

  private getMeals(): void {
    this.message = 'Searching for meals';
    this.mealDataService
      .getMeals()
        .then(foundMeals => {
          this.message = foundMeals.length > 0 ? '' : 'No meals found';
          this.meals = foundMeals;
        });
  }

  ngOnInit() {
    this.getMeals();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
