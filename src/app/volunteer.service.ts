import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {

  constructor(private http : HttpClient) { }
  getVolunteerDetails() : Observable<any>{;
    return this.http.get("../assets/data/Sample_data.json").pipe(map( (x: any) => {return x.volunteers;}))
  }
}
