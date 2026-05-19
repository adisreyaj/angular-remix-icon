import { ComponentFixture, TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AngularRemixIconComponent } from './angular-remix-icon.component';
import { SELECTED_ICONS } from './provider';

describe('AngularRemixIconComponent', () => {
  let fixture: ComponentFixture<AngularRemixIconComponent>;
  const homeSvg = '<svg data-testid="home-icon"></svg>';
  const mailSvg = '<svg data-testid="mail-icon"></svg>';

  const icons = {
    RiHome2Fill: homeSvg,
    RiMailUnreadLine: mailSvg,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularRemixIconComponent],
      providers: [{ provide: SELECTED_ICONS, useValue: icons }],
    }).compileComponents();

    fixture = TestBed.createComponent(AngularRemixIconComponent);
  });

  it('should create', () => {
    fixture.componentRef.setInput('name', 'home-2-fill');
    fixture.detectChanges();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('injects configured icon SVG into the host', () => {
    fixture.componentRef.setInput('name', 'home-2-fill');
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.querySelector('svg[data-testid="home-icon"]')).not.toBeNull();
  });

  it('applies host classes from the icon name', () => {
    fixture.componentRef.setInput('name', 'home-2-fill');
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    expect(host.classList.contains('rmx-icon')).toBe(true);
    expect(host.classList.contains('rmx-icon-home-2-fill')).toBe(true);
  });

  it('updates SVG when the name input changes', () => {
    fixture.componentRef.setInput('name', 'home-2-fill');
    fixture.detectChanges();
    expect(
      (fixture.nativeElement as HTMLElement).querySelector(
        '[data-testid="home-icon"]',
      ),
    ).not.toBeNull();

    fixture.componentRef.setInput('name', 'mail-unread-line');
    fixture.detectChanges();
    expect(
      (fixture.nativeElement as HTMLElement).querySelector(
        '[data-testid="mail-icon"]',
      ),
    ).not.toBeNull();
  });

  it('warns and renders empty content when the icon is not configured', () => {
    const warnSpy = vi.spyOn(console, 'warn');

    fixture.componentRef.setInput('name', 'unknown-icon-line');
    fixture.detectChanges();

    expect(warnSpy).toHaveBeenCalledWith('Icon not found: unknown-icon-line\n');
    expect((fixture.nativeElement as HTMLElement).innerHTML).toBe('');
  });
});
