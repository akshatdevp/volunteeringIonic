import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  constructor(private http : HttpClient) { }
  getEvents() : Observable<any>{;
    return this.http.get("../assets/data/Sample_data.json")
  }
}
