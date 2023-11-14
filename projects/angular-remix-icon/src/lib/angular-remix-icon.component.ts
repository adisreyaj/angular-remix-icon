import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
  inject,
} from '@angular/core';
import { IconName } from './icon-names';
import { Icons } from './icon.provider';
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
export class AngularRemixIconComponent implements OnChanges {
  @HostBinding('class') get classes(): string {
    return `rmx-icon rmx-icon-${this.name}`;
  }

  @Input({ required: true }) name!: IconName;

  private readonly elem: ElementRef = inject(ElementRef);
  private readonly changeDetector: ChangeDetectorRef =
    inject(ChangeDetectorRef);
  private readonly icons: Icons = inject(Icons);

  ngOnChanges(changes: SimpleChanges): void {
    const icons = Object.assign({}, ...(this.icons as any as object[]));
    const svg =
      icons[`Ri${upperCamelCase(changes['name'].currentValue)}`] || '';
    console.log(svg);
    if (!svg) {
      console.warn(`Icon not found: ${changes['name'].currentValue}\n`);
    }
    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
