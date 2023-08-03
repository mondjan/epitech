import { test, expect } from '@playwright/test';

test('login/logout', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'log in' }).click();
  await page.getByRole('link', { name: 'send' }).click();
  expect( page.getByRole('heading', { name: 'name' }));
  await page.locator('div').filter({ hasText: /^name My Profile My venues Bookings Log out$/ }).locator('label a').click();
  await page.getByText('Log out').click();
  expect( page.getByText('sign uplog in'));
});