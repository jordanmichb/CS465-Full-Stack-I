import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MealDataService } from '../services/meal-data.service';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {

  addForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealService: MealDataService
  ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      _id: [],
      name: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.valid) {
      this.mealService.addMeal(this.addForm.value)
      .then( data => {
        console.log(data);
        this.router.navigate(['list-meals']);
      });
    }
  }

  // get the form shrt name to access the form fields
  get f() { return this.addForm.controls; }
}
