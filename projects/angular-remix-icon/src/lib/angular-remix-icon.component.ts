import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Icons } from './icon.provider';
import { upperCamelCase } from './utils/utils';
import { IconName } from './icon-names';

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
})
export class AngularRemixIconComponent implements OnChanges {
  @HostBinding('class') get classes(): string {
    return `rmx-icon rmx-icon-${this.name}`;
  }

  @Input() name!: IconName;
  constructor(
    private elem: ElementRef,
    private changeDetector: ChangeDetectorRef,
    private icons: Icons
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    const svg =
      icons[`Ri${upperCamelCase(changes['name'].currentValue)}`] || '';
    if (!svg) {
      console.warn(`Icon not found: ${changes['name'].currentValue}\n`);
    }
    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
