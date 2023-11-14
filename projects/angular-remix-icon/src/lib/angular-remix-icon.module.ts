import { ModuleWithProviders, NgModule } from '@angular/core';

import { AngularRemixIconComponent } from './angular-remix-icon.component';
import { SELECTED_ICONS } from './provider';

/**
 * @deprecated - Use the new `provideRemixIcon` function instead.
 */
@NgModule({
  imports: [AngularRemixIconComponent],
  exports: [AngularRemixIconComponent],
})
export class RemixIconModule {
  /**
   * Configure the icons that needs to be made available for
   * user in the application.
   *
   * @param icons - Object
   */
  static configure(
    icons: Record<string, string>,
  ): ModuleWithProviders<RemixIconModule> {
    return {
      ngModule: RemixIconModule,
      providers: [{ provide: SELECTED_ICONS, multi: false, useValue: icons }],
    };
  }
}
