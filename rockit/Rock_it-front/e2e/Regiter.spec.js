import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: 'sign up' }).click();
  await page.locator('#my-modal-2').click();
  await page.getByPlaceholder('email').fill('playwrighttests');
  await page.getByPlaceholder('name').fill('playwrighttests');
  await page.getByPlaceholder('password').fill('playwrighttests');
  await page.getByRole('listbox').selectOption('artist');
  await page.getByRole('link', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'log in' }).click();
  await page.locator('#my-modal-3 input[type="text"]').click();
  await page.locator('#my-modal-3 input[type="text"]').fill('playwrighttest');
  await page.locator('#my-modal-3 input[type="password"]').click();
  await page.locator('#my-modal-3 input[type="password"]').fill('playwrighttest');
  await page.getByRole('link', { name: 'send' }).click();
  expect( page.getByRole('heading', { name: 'playwrighttest' }));
});