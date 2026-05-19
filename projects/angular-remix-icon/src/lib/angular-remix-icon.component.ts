import {
  Component,
  effect,
  ElementRef,
  HostBinding,
  inject,
  input,
} from '@angular/core';
import { IconName } from './icon-names';
import { SELECTED_ICONS } from './provider';
import { upperCamelCase } from './utils/utils';

@Component({
  selector: 'rmx-icon',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        display: block;
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
    `,
  ],
  standalone: true,
})
export class AngularRemixIconComponent {
  public name = input.required<IconName>();

  private readonly elem: ElementRef = inject(ElementRef);

  private readonly icons: Record<string, string> = inject(SELECTED_ICONS, {
    skipSelf: true,
  });

  constructor() {
    effect(() => {
      const iconName = this.name();
      const svg = this.icons[`Ri${upperCamelCase(iconName)}`] || '';
      if (!svg) {
        console.warn(`Icon not found: ${iconName}\n`);
      }
      this.elem.nativeElement.innerHTML = svg;
    });
  }

  @HostBinding('class')
  public get classes(): string {
    return `rmx-icon rmx-icon-${this.name()}`;
  }
}
