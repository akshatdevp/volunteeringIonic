import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { SchedulePage } from '../schedule/schedule';
import { NewHomePage } from '../../new-home/new-home.page';
import { EventDetailsPage } from '../../event-details/event-details.page';
import { NewSchedulePage } from '../../new-schedule/new-schedule.page';
import { ProfilePage } from '../../profile/profile.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path : 'new-home',
        component : NewHomePage
      },
      {
        path : 'new-schedule',
        children : [
          {
              path : '',
              component : NewSchedulePage
          }
        ]
      },
      {
        path : 'profile',
        component : ProfilePage
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            component: SchedulePage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          }
        ]
      },
      {
        path: 'activitys',
        children: [
          {
            path: '',
            loadChildren: () => import('../activity-list/activity-list.module').then(m => m.ActivityListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
          },
          {
            path: 'activity-details/:activityId',
            loadChildren: () => import('../activity-detail/activity-detail.module').then(m => m.ActivityDetailModule)
          }
        ]
      },
      {
        path : 'metrics',
        loadChildren : () => import('../../metrics/metrics.module').then(m => m.MetricsPageModule)
      },
      {
        path: '',
        redirectTo: '/app/tabs/new-schedule',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

