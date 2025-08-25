import { test, expect } from '@playwright/test';

test.describe('Alerts page', () => {
  test('handles simple alert', async ({ page }) => {
    await page.goto('/alerts');
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('You clicked a button');
      await dialog.accept();
    });
    await page.click('#alertButton');
  });

  test('handles timed alert', async ({ page }) => {
    await page.goto('/alerts');
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('This alert appeared after 5 seconds');
      await dialog.accept();
    });
    await page.click('#timerAlertButton');
    // Wait for alert to appear (max 7s)
    await page.waitForTimeout(7000);
  });

  test('handles confirm alert - accept', async ({ page }) => {
    await page.goto('/alerts');
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('Do you confirm action?');
      await dialog.accept();
    });
    await page.click('#confirmButton');
    await expect(page.locator('#confirmResult')).toHaveText('You selected Ok');
  });

  test('handles confirm alert - dismiss', async ({ page }) => {
    await page.goto('/alerts');
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('Do you confirm action?');
      await dialog.dismiss();
    });
    await page.click('#confirmButton');
    await expect(page.locator('#confirmResult')).toHaveText('You selected Cancel');
  });

  test('handles prompt alert', async ({ page }) => {
    await page.goto('/alerts');
    page.once('dialog', async dialog => {
      expect(dialog.message()).toBe('Please enter your name');
      await dialog.accept('Daria');
    });
    await page.click('#promtButton');
    await expect(page.locator('#promptResult')).toHaveText('You entered Daria');
  });
});