import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Meal } from '../models/meal';
import { AuthenticationService } from '../authentication';


@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.css']
})
export class MealCardComponent implements OnInit {

  @Input('meal') meal: any;
  
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  private editMeal(meal: Meal): void {
    localStorage.removeItem("mealName");
    localStorage.setItem("mealName", meal.name);
    this.router.navigate(['edit-meal']);
  }

  private deleteMeal(meal: Meal): void {
    localStorage.removeItem("mealName");
    localStorage.setItem("mealName", meal.name);
    this.router.navigate(['delete-meal']);
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}