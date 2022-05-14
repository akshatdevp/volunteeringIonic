import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { EventService } from '../event.service';
import { VolunteerService } from '../volunteer.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  currEvent : any
  eventId : any
  currVol : any
  required_skills : [any]
  events : any
  volunteers : any
  isLiked :boolean
  likes : any
  isVolAssigned : boolean
  constructor(private route :ActivatedRoute,
              private eventService : EventService,
              private volunteerService : VolunteerService,
              public toastController: ToastController)  { }

  ngOnInit() {
    this.isLiked=false
    this.events = ""
    this.volunteers = ""
    this.currEvent = {
			"id": 5,
			"name" : "vent3",
			"description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
			"required_no": 5,
			"assigned_volunteers" : [4,5],
			"start_time" : "2022-04-04T00:00:00.141Z",
			"end_time"   : "2022-08-04T15:00:00.141Z",
      "skills_required" : ["singing","dancing"],
			"organisation" : "WHO"
		}
    this.currVol = {
      "name" : "VOL",
      "skills" : ["math"]
    }
    this.likes = this.getLikes()
    this.route.paramMap.subscribe(
      (params : ParamMap) => {
        this.eventId = +params.get('id');
        // console.log("GOT ID!!" + this.eventId)
        this.setCurrEvent(this.eventId)
      }
  )

    this.volunteerService.getVolunteerDetails().subscribe(
      (volunteers) => {
        this.volunteers = volunteers
        // console.log("vol")
        this.setVolunteer(0)
      }
    )

    //this.setVolunteer(0);
    // console.log(this.required_skills)
  }
  setCurrEvent(eventId : any){
    this.eventService.getEvents().subscribe(
      (events) => {
        this.events = events.events
        this.currEvent = this.events.filter( (x) => x.id == this.eventId)[0]
        this.required_skills = this.currEvent.skills_required;

        // console.log("event")
        // console.log(this.currEvent)
        // console.log(this.required_skills)
      }
    )
  }

  setVolunteer(id : any){
    this.currVol = this.volunteers[id];
    // console.log(this.currVol);
  }

  isVolSkilled(skill : any){
    return this.currVol.skills.includes(skill)?"success" : "danger";
  }
  isVolEligible(){
    let containsAll = (arr, target) => target.every(v => arr.includes(v));
    return containsAll(this.currVol.skills,this.required_skills);
  }
  checkAndAssign(){
    if(this.isVolEligible()) {
      this.currVol.upcoming_events.push(this.currEvent.id);
      this.currEvent.assigned_volunteers.push(this.currVol.id);
      this.isVolAssigned = true
      this.presentToast()
    }
    else { this.isVolAssigned = false; alert("You are not eligible, please acquire/add the required skills and try again");}
  }
  toggleLike(){
    if(this.isLiked){
      this.likes--;
    }
    else this.likes++;
    this.isLiked = !this.isLiked
  }
  getLikes(){
    return Math.floor(Math.random()*100)
  }

  async presentToast() {
    const toast = await this.toastController.create({
      header : "SUCCESS!",
      message: 'Your details have been updated!',
      duration: 2000,
      position : 'top',
      color : 'success'
    });
    toast.present();}
}
