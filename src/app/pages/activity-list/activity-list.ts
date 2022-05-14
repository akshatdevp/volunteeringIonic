import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'page-activity-list',
  templateUrl: 'activity-list.html',
  styleUrls: ['./activity-list.scss'],
})
export class ActivityListPage {
  activitys: any[] = [];

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getActivitys().subscribe((activitys: any[]) => {
      this.activitys = activitys;
    });
  }
}
