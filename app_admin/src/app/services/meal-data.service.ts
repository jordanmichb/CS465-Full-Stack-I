import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Meal } from '../models/meal';

@Injectable()
export class MealDataService {

  constructor(private http: Http) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private mealUrl = `${this.apiBaseUrl}meals/`;

  public addMeal(formData: Meal): Promise<Meal> {
    return this.http
      .post(this.mealUrl, formData) // pass form data in request body
      .toPromise()
      .then(response => response.json() as Meal[])
      .catch(this.handleError);
  }

  public getMeal(mealName: string): Promise<Meal[]> {
    return this.http
      .get(this.mealUrl + mealName)
      .toPromise()
      .then(response => response.json() as Meal)
      .catch(this.handleError);
  }

  public getMeals(): Promise<Meal[]> {
    return this.http
      .get(this.mealUrl)
      .toPromise()
      .then(response => response.json() as Meal[])
      .catch(this.handleError);
  }

  public updateMeal(formData: Meal): Promise<Meal> {
    console.log(formData);
    return this.http
      .put(this.mealUrl + formData.name, formData)
      .toPromise()
      .then(response => response.json() as Meal[])
      .catch(this.handleError);
  }

  public deleteMeal(mealName: string): Promise<Meal> {
    return this.http
      .delete(this.mealUrl + mealName)
      .toPromise()
      .then(response => response.json() as Meal)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // For demo purposes only
    return Promise.reject(error.message || error);
  }
}
