import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { RoomDataService } from '../services/room-data.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  editForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private roomService: RoomDataService
  ) { }

  ngOnInit() {
    // retrieve stashed roomName
    let roomName = localStorage.getItem("roomName");
    if (!roomName) {
      alert("Something wrong, couldn't find where I stashed roomName!");
      this.router.navigate(['list-rooms']);
      return;
    }

    // Initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      name: [roomName, Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      rate: ['', Validators.required],
    })

    this.roomService.getRoom(roomName)
      .then(data => {
        console.log(data);
        // Don't use editForm.setValue(), it will throw console error
        this.editForm.patchValue(data[0]);
      })
  }

  onSubmit() {
    this.submitted = true;

    if (this.editForm.valid) {
      this.roomService.updateRoom(this.editForm.value)
        .then(data => {
          console.log(data);
          this.router.navigate(['list-rooms']);
        });
    }
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }

}
