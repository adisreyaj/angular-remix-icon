import { TestBed } from '@angular/core/testing';
import { provideRemixIcon, SELECTED_ICONS } from './provider';

describe('provideRemixIcon', () => {
  it('registers configured icons on SELECTED_ICONS', () => {
    const icons = { RiHome2Fill: '<svg data-testid="home"></svg>' };

    TestBed.configureTestingModule({
      providers: [provideRemixIcon(icons)],
    });

    expect(TestBed.inject(SELECTED_ICONS)).toBe(icons);
  });
});
