import { Injectable, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { BROWSER_STORAGE } from '../storage';

import { Room } from '../models/room';

@Injectable()
export class RoomDataService {

  constructor(
    private http: Http,
    @Inject(BROWSER_STORAGE) private storage: Storage
    ) { }

  private apiBaseUrl = 'http://localhost:3000/api/';
  private roomUrl = `${this.apiBaseUrl}rooms/`;

  public addRoom(formData: Room): Promise<Room> {
    const httpOptions = {                                                  
      headers: new Headers({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`  
      })
    };
    return this.http
      .post(this.roomUrl, formData, httpOptions) // pass form data in request body
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  public getRoom(roomName: string): Promise<Room[]> {
    return this.http
      .get(this.roomUrl + roomName)
      .toPromise()
      .then(response => response.json() as Room)
      .catch(this.handleError);
  }

  public getRooms(): Promise<Room[]> {
    console.log('Inside RoomDataService#getRooms');
    return this.http
      .get(this.roomUrl)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  public updateRoom(formData: Room): Promise<Room> {
    console.log(formData);
    const httpOptions = {                                                  
      headers: new Headers({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`  
      })
    };
    return this.http
      .put(this.roomUrl + formData.name, formData, httpOptions)
      .toPromise()
      .then(response => response.json() as Room[])
      .catch(this.handleError);
  }

  public deleteRoom(roomName: string): Promise<Room> {
    const httpOptions = {                                                  
      headers: new Headers({
        'Authorization': `Bearer ${this.storage.getItem('travlr-token')}`  
      })
    };
    return this.http
      .delete(this.roomUrl + roomName, httpOptions)
      .toPromise()
      .then(response => response.json() as Room)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error); // For demo purposes only
    return Promise.reject(error.message || error);
  }
}
