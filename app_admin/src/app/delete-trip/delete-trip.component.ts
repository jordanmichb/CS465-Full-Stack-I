import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-delete-trip',
  templateUrl: './delete-trip.component.html',
  styleUrls: ['./delete-trip.component.css']
})
export class DeleteTripComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  tripCode = localStorage.getItem("tripCode");

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) { }

  ngOnInit() {
    // retrieve stashed tripId
    //let tripCode = localStorage.getItem("tripCode");
    if (!this.tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['list-trips']);
      return;
    }

    console.log('DeleteTripComponen#onIniit found tripCode ' + this.tripCode);
  }

  onClick() {
    this.submitted = true;

    this.tripService.deleteTrip(this.tripCode)
      .then(data => {
        console.log(data);
        this.router.navigate(['list-trips']);
      });
  }
}
