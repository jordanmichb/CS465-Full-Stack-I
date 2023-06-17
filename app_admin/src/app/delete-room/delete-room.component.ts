import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { RoomDataService } from '../services/room-data.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;
  roomName = localStorage.getItem("roomName");

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roomService: RoomDataService
  ) { }

  ngOnInit() {
    if (!this.roomName) {
      alert("Something wrong, couldn't find where I stashed roomName!");
      this.router.navigate(['list-rooms']);
      return;
    }
  }

  onClick() {
    this.submitted = true;

    this.roomService.deleteRoom(this.roomName)
      .then(data => {
        console.log(data);
        this.router.navigate(['list-rooms']);
      });
  }
}
