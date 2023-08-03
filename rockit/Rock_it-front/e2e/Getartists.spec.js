import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  expect( page.getByRole('link', { name: '1 Mos Eisley Cantina Band' }));
});