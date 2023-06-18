import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MealDataService } from '../services/meal-data.service';

@Component({
  selector: 'app-delete-meal',
  templateUrl: './delete-meal.component.html',
  styleUrls: ['./delete-meal.component.css']
})
export class DeleteMealComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  mealName = localStorage.getItem("mealName");

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealService: MealDataService
  ) { }

  ngOnInit() {
    if (!this.mealName) {
      alert("Something wrong, couldn't find where I stashed mealName!");
      this.router.navigate(['list-meals']);
      return;
    }
  }

  onClick() {
    this.submitted = true;

    this.mealService.deleteMeal(this.mealName)
      .then(data => {
        console.log(data);
        this.router.navigate(['list-meals']);
      });
  }
}
