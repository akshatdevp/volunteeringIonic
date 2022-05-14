import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { EventService } from '../event.service';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.page.html',
  styleUrls: ['./new-schedule.page.scss'],
})
export class NewSchedulePage implements OnInit {
  currEvents : any
  ios       : boolean
  showSearchbar : boolean
  date : any
  events : any
  constructor(private eventService : EventService) { }

  ngOnInit() {
    this.date = "2022-04-04T13:00:00.141Z"
    this.getCurrEvents();
  }
  getCurrEvents(){
    this.eventService.getEvents().subscribe((data) =>{
        this.events = data.events;
        console.log(this.date)
        this.currEvents = this.events.filter((event) => this.getDateFromISOString(event.start_time) == this.getDateFromISOString(this.date))
        const zx = this.currEvents;
        this.currEvents.sort();

    });
  }

  getDateFromISOString(date : String){
    return date.split('T')[0];
  }
  getTimeFromISOString(date : String){
    return date.split('T')[1].split('.')[0]
  }
}
