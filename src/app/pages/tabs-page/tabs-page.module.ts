import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

//import { AboutModule } from '../about/about.module';
import { ScheduleModule } from '../schedule/schedule.module';
import { SessionDetailModule } from '../session-detail/session-detail.module';
import { ActivityDetailModule } from '../activity-detail/activity-detail.module';
import { ActivityListModule } from '../activity-list/activity-list.module';
import { NewHomePageModule } from '../../new-home/new-home.module';
import { NewSchedulePageModule } from '../../new-schedule/new-schedule.module';
import { ProfilePageModule } from '../../profile/profile.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ScheduleModule,
    SessionDetailModule,
    ActivityDetailModule,
    ActivityListModule,
    TabsPageRoutingModule,
    NewHomePageModule,
    NewSchedulePageModule,
    ProfilePageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
