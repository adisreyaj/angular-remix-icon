import { InjectionToken, makeEnvironmentProviders } from '@angular/core';

export const provideRemixIcon = (icons: Record<string, string>) => {
  return makeEnvironmentProviders([
    {
      provide: SELECTED_ICONS,
      multi: false,
      useValue: icons,
    },
  ]);
};

export const SELECTED_ICONS = new InjectionToken<Record<string, string>>(
  'Selected Icons',
);
