import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { VolunteerService } from '../volunteer.service';
import {Auth} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import {Volunteer} from '../../models';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { withLatestFrom } from 'rxjs/operators';

  @Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
  })
  export class ProfilePage implements OnInit {
    volunteer : any
    volunteers : any
    imageText : any
    completedEvents : any
    allSkills : any
    user : any
    ampVol : any
    constructor(
      public skillService: SkillService,
      public volunteerService : VolunteerService,
      public router : Router,
      public toastController: ToastController
    ) { }

    ngOnInit() {
      this.init()
      this.getVolunteer()
     this.volunteer = {"name" : "INIT"}
     this.ampVol = {
       role : "",
       gender : "",
       orgName : "",
       id : null,
       userId : null,
       preferences : {"notifications" : true},
       log : {"eventsCompleted" : 12}
     }
     //this.completedEvents = 0
      //  this.imageText  = "P"
      //this.getCurrVol()

    }
    init(){
        this.volunteerService.getVolunteerDetails().subscribe(
          (volunteers) => {
            //this.volunteers = volunteers
            //console.log(this.volunteers);
            this.volunteer = volunteers[0]
            this.imageText = this.getVolunteerPhoto()
            //console.log(this.volunteer.events_completed.length)
            this.completedEvents = this.volunteer.events_completed.length
            console.log(this.completedEvents)

            //this.imageText = this.getVolunteerPhoto();
          }
        )
        this.skillService.getSkillList().subscribe(
          (skills) => {this.allSkills = skills}
        )
    }
    getVolunteerPhoto(){
      const fullName = this.volunteer.name;
      console.log(fullName)
      return fullName.split(' ').map(name => name[0]).join('').toUpperCase();
      // document.getElementById('profileImage').innerHTML = intials;
    }
    removeSkill(skill : String){
      console.log("removing skill")
      const ind = this.volunteer.skills.indexOf(skill)
      console.log(ind)
      if(ind!=-1)
        this.volunteer.skills.splice(this.volunteer.skills.indexOf(skill),1)
    }
    async getVolunteer(){
      const processVolunteer =  await Auth.currentAuthenticatedUser().then(
        x => {
            this.user = x.attributes // get user
            return DataStore.query(Volunteer,vol => vol.id("eq",this.user.sub)) // query for ID, returns promise
        })
       const volArray = await processVolunteer; // get volunteer (returns array)
       this.ampVol = volArray.length?volArray[0]: this.ampVol

    }
    checkProfileCompleted(){
       return Object.values(this.ampVol).some( field => field===null || field==='')
    }
    updateProfile(){
      console.log("updating profile")
      if(this.checkProfileCompleted())this.ampVol.profileCompleted=true
      this.ampVol.id = new Date().toString()
      DataStore.save(new Volunteer(this.ampVol))
      this.presentToast();

    }
    redirectToHome(){
      this.router.navigateByUrl('app/tabs/new-schedule')
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






