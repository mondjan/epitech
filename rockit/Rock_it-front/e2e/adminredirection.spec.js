import { test, expect } from '@playwright/test';

test('nonloged in', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.goto('http://localhost:5173/admin');
  expect(await page.goto('http://localhost:5173/'));
});

test('loged in', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'log in' }).click();
  await page.locator('#my-modal-3 input[type="text"]').click();
  await page.locator('#my-modal-3 input[type="text"]').fill('jan');
  await page.locator('#my-modal-3 input[type="password"]').click();
  await page.locator('#my-modal-3 input[type="password"]').fill('jan');
  await page.getByRole('link', { name: 'send' }).click();
  await page.waitForLoadState('domcontentloaded');
  await page.goto('http://localhost:5173/');
  await page.goto('http://localhost:5173/admin');
  await page.waitForLoadState('domcontentloaded');
  expect( await expect(page).toHaveURL('http://localhost:5173/admin'));

});