import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { rooms } from '../data/rooms';
import { RoomDataService } from '../services/room-data.service';
import { Room } from '../models/room';
import { AuthenticationService } from '../authentication';

@Component({
  selector: 'app-room-listing',
  templateUrl: './room-listing.component.html',
  styleUrls: ['./room-listing.component.css'],
  providers: [RoomDataService]
})
export class RoomListingComponent implements OnInit {

  //rooms: Array<any> = rooms;
  rooms: Room[];

  message: string;
  
  constructor(
    private roomDataService: RoomDataService,
    private authService: AuthenticationService,
    private router: Router
    ) { }

  private addRoom(): void {
    this.router.navigate(['add-room']);
  }

  private getRooms(): void {
    this.message = 'Searching for rooms';
    this.roomDataService
      .getRooms()
        .then(foundRooms => {
          this.message = foundRooms.length > 0 ? '' : 'No rooms found';
          this.rooms = foundRooms;
        });
  }

  ngOnInit() {
    this.getRooms();
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

}
