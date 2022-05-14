import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './providers/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
  },
  {
    path: '',
    redirectTo: 'app/tabs/new-home',
    pathMatch: 'full'
  },
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
  },

  {
    path: 'app',
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  },
  {
    path: 'new-home',
    canActivate: [AuthGuard],
    loadChildren: () => import('./new-home/new-home.module').then( m => m.NewHomePageModule)
  },
  {
    path: 'new-schedule',
    canActivate: [AuthGuard],
    loadChildren: () => import('./new-schedule/new-schedule.module').then( m => m.NewSchedulePageModule)
  },
  {
    path: 'event-details/:id',
    canActivate: [AuthGuard],
    loadChildren: () => import('./event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'metrics',
    canActivate: [AuthGuard],
    loadChildren: () => import('./metrics/metrics.module').then( m => m.MetricsPageModule)
  },
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
