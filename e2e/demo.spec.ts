import { expect, test } from '@playwright/test';

const configuredIconNames = [
  'home-2-fill',
  'mail-unread-line',
  'send-plane-fill',
];

test.describe('angular-remix-icon demo', () => {
  test('loads the demo page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Angular Remix Icon Demo/i);
    await expect(page.getByTestId('demo-header')).toBeVisible();
    await expect(page.getByTestId('icon-examples')).toBeVisible();
  });

  test('renders header icons as SVG', async ({ page }) => {
    await page.goto('/');

    const headerIcons = page.getByTestId('demo-header').locator('rmx-icon');
    await expect(headerIcons).toHaveCount(3);

    for (const icon of await headerIcons.all()) {
      await expect(icon.locator('svg')).toBeVisible();
    }
  });

  test('renders configured example icons', async ({ page }) => {
    const warnings: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'warning' && message.text().includes('Icon not found')) {
        warnings.push(message.text());
      }
    });

    await page.goto('/');

    for (const iconName of configuredIconNames) {
      const row = page
        .getByTestId('icon-row')
        .and(page.locator(`[data-icon-name="${iconName}"]`));
      await expect(row).toBeVisible();
      await expect(row.locator('rmx-icon svg')).toBeVisible();
      await expect(row.getByText(iconName, { exact: true })).toBeVisible();
    }

    expect(warnings).toEqual([]);
  });
});
