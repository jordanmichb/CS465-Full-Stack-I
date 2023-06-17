import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { TripListingComponent } from './trip-listing/trip-listing.component';
import { AddTripComponent } from './add-trip/add-trip.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { DeleteTripComponent } from './delete-trip/delete-trip.component';

import { RoomListingComponent } from './room-listing/room-listing.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'list-trips', component: TripListingComponent },
    { path: 'add-trip', component: AddTripComponent },
    { path: 'edit-trip', component: EditTripComponent },
    { path: 'delete-trip', component: DeleteTripComponent },

    { path: 'list-rooms', component: RoomListingComponent },
    { path: 'add-room', component: AddRoomComponent },
    { path: 'edit-room', component: EditRoomComponent },
    { path: 'delete-room', component: DeleteRoomComponent },
    
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }