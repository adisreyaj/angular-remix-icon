import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  RiNotification2Fill,
  RiChat3Fill,
  RiSettings3Fill,
  RiHome2Fill,
  RiMailUnreadLine,
  RiSendPlaneFill,
  RemixIconModule,
} from 'angular-remix-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const icons = {
  RiNotification2Fill,
  RiChat3Fill,
  RiSettings3Fill,
  RiHome2Fill,
  RiMailUnreadLine,
  RiSendPlaneFill,
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, RemixIconModule.configure(icons)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
