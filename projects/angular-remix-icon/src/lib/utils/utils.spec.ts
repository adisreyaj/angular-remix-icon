import { upperCamelCase } from './utils';

describe('upperCamelCase', () => {
  it('converts kebab-case icon names', () => {
    expect(upperCamelCase('home-3-line')).toBe('Home3Line');
    expect(upperCamelCase('mail-unread-line')).toBe('MailUnreadLine');
  });

  it('converts snake_case icon names', () => {
    expect(upperCamelCase('home_2_fill')).toBe('Home2Fill');
  });
});
