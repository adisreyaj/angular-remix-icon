import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  RiAncientGateFill,
  RiHome2Fill,
  AngularRemixIconModule,
} from 'angular-remix-icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const icons = {
  RiAncientGateFill,
  RiHome2Fill,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularRemixIconModule.configure(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
