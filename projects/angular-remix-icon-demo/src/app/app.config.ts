import { ApplicationConfig } from '@angular/core';
import {
  RiChat3Fill,
  RiHome2Fill,
  RiMailUnreadLine,
  RiNotification2Fill,
  RiSendPlaneFill,
  RiSettings3Fill,
} from 'angular-remix-icon';
import { provideRemixIcon } from 'projects/angular-remix-icon/src/public-api';

const ICONS = {
  RiNotification2Fill,
  RiChat3Fill,
  RiSettings3Fill,
  RiHome2Fill,
  RiMailUnreadLine,
  RiSendPlaneFill,
};
export const APP_CONFIG: ApplicationConfig = {
  providers: [provideRemixIcon(ICONS)],
};
