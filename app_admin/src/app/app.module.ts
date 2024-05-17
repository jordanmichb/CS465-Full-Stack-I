import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';

import { TripListingComponent } from './trip-listing/trip-listing.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { RoomListingComponent } from './room-listing/room-listing.component';
import { RoomCardComponent } from './room-card/room-card.component';
import { RoomDataService } from './services/room-data.service';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';

import { MealListingComponent } from './meal-listing/meal-listing.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { MealDataService } from './services/meal-data.service';
import { AddMealComponent } from './add-meal/add-meal.component';
import { EditMealComponent } from './edit-meal/edit-meal.component';
import { DeleteMealComponent } from './delete-meal/delete-meal.component';

@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    DeleteTripComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    RoomListingComponent,
    RoomCardComponent,
    AddRoomComponent,
    EditRoomComponent,
    DeleteRoomComponent,
    MealListingComponent,
    MealCardComponent,
    AddMealComponent,
    EditMealComponent,
    DeleteMealComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TripDataService,
    RoomDataService,
    MealDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
