import { makeEnvironmentProviders } from '@angular/core';
import { Icons } from './icon.provider';

export const provideRemixIcon = (icons: { [key: string]: string }) =>
  makeEnvironmentProviders([
    {
      provide: Icons,
      multi: true,
      useFactory: () => icons,
    },
  ]);
