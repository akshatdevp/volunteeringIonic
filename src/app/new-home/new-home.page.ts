import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { Event } from '../../models';
import { DataStore } from '@aws-amplify/datastore';
import * as Leaflet from 'leaflet';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-new-home',
  templateUrl: './new-home.page.html',
  styleUrls: ['./new-home.page.scss'],
})
export class NewHomePage implements OnInit {
  events : any;
  ampEvents : Event[]
  viEvents : any;
  ampMap : Leaflet.Map;

  onSlideChange() {
    //console.log('slide change');
  }
  constructor(
              public router : Router,
              private eventService : EventService) { }

  ngOnInit() {
    this.getCurrEvents();
    this.getAmpEvents();
  }
  ngAfterViewInit() {
    this.leafletMap();

}
  leafletMap(){
    this.ampMap = Leaflet.map('mapId').setView([28.644800, 77.216721], 5);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(this.ampMap);


  }
  getCurrEvents(){
    this.eventService.getEvents().subscribe(
      (data) => {
        this.events = data.events;
        this.viEvents = [{"startDatetime" : "03/05/2022","title" : "volunteering event"},{"startDatetime" : "05/08/2022","title" : "teaching event"},{"startDatetime" : "05/11/2022","title" : "blood camp"}]
        console.log(this.events)
      }
    )
  }
  async getAmpEvents(){
    console.log("HERE")
    this.ampEvents = await DataStore.query(Event)
    console.log(this.ampEvents[0].startDateTime)
    console.log("PASS")
  }
  ngOnDestroy() {
    this.ampMap.remove();
  }
  getImg(){
    return "../../assets/img/img5" + + ".png";
  }
}

