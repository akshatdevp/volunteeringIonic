import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewHomePageRoutingModule } from './new-home-routing.module';

import { NewHomePage } from './new-home.page';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewHomePageRoutingModule,
    SwiperModule
  ],
  declarations: [NewHomePage]
})
export class NewHomePageModule {}
