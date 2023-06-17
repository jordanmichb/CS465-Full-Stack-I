import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Room } from '../models/room';
import { AuthenticationService } from '../authentication';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {

  @Input('room') room: any;
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  private editRoom(room: Room): void {
    localStorage.removeItem("roomName");
    localStorage.setItem("roomName", room.name);
    this.router.navigate(['edit-room']);
  }

  private deleteRoom(room: Room): void {
    localStorage.removeItem("roomName");
    localStorage.setItem("roomName", room.name);
    this.router.navigate(['delete-room']);
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
