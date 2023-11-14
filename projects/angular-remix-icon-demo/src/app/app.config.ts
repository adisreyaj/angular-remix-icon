import { ApplicationConfig } from '@angular/core';
import {
  provideRemixIcon,
  RiChat3Fill,
  RiHome2Fill,
  RiMailUnreadLine,
  RiNotification2Fill,
  RiSendPlaneFill,
  RiSettings3Fill,
} from 'angular-remix-icon';

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
