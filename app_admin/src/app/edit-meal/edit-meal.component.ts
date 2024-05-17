import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { MealDataService } from '../services/meal-data.service';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private mealService: MealDataService
  ) { }

  ngOnInit() {
    // retrieve stashed mealName
    let mealName = localStorage.getItem("mealName");
    if (!mealName) {
      alert("Something wrong, couldn't find where I stashed mealName!");
      this.router.navigate(['list-meals']);
      return;
    }

    // Initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      name: [mealName, Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.mealService.getMeal(mealName)
      .then(data => {
        console.log(data);
        // Don't use editForm.setValue(), it will throw console error
        this.editForm.patchValue(data[0]);
      })
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.mealService.updateMeal(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['list-meals']);
        });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

}
