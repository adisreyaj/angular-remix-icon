import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  inject,
  Input,
  OnChanges,
  SimpleChanges,
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
export class AngularRemixIconComponent implements OnChanges {
  @Input({ required: true })
  public name!: IconName;

  private readonly elem: ElementRef = inject(ElementRef);
  private readonly changeDetector: ChangeDetectorRef =
    inject(ChangeDetectorRef);

  private readonly icons: Record<string, string> = inject(SELECTED_ICONS, {
    skipSelf: true,
  });

  @HostBinding('class')
  public get classes(): string {
    return `rmx-icon rmx-icon-${this.name}`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    const svg =
      this.icons[`Ri${upperCamelCase(changes['name'].currentValue)}`] || '';
    if (!svg) {
      console.warn(`Icon not found: ${changes['name'].currentValue}\n`);
    }
    this.elem.nativeElement.innerHTML = svg;
    this.changeDetector.markForCheck();
  }
}
