import { ModuleWithProviders, NgModule, Optional } from '@angular/core';

import { AngularRemixIconComponent } from './angular-remix-icon.component';
import { Icons } from './icon.provider';

@NgModule({
  declarations: [AngularRemixIconComponent],
  exports: [AngularRemixIconComponent],
})
export class AngularRemixIconModule {
  constructor(@Optional() private icons: Icons) {
    if (!this.icons) {
      throw new Error(
        `No icons provided. Please refer the documentation to configure icons: https://github.com/adisreyaj/angular-remix-icon`
      );
    }
  }

  /**
   * Configure the icons that needs to be made available for
   * user in the application.
   *
   * @param icons - Object
   */
  static configure(icons: {
    [key: string]: string;
  }): ModuleWithProviders<AngularRemixIconModule> {
    return {
      ngModule: AngularRemixIconModule,
      providers: [{ provide: Icons, multi: true, useValue: icons }],
    };
  }
}
