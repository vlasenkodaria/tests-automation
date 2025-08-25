import { test, expect } from '@playwright/test';

test.describe('Books page', () => {
  test('should display a list of books', async ({ page }) => {
    await page.goto('/books');
    const rows = page.locator('.rt-tbody .rt-tr-group');
    await expect(rows).toHaveCountGreaterThan(0);
  });

  test('should search for a book by title', async ({ page }) => {
    await page.goto('/books');
    await page.fill('#searchBox', 'Git Pocket Guide');
    const firstRow = page.locator('.rt-tbody .rt-tr-group').first();
    await expect(firstRow).toContainText('Git Pocket Guide');
  });

  test('should open book details page', async ({ page }) => {
    await page.goto('/books');
    await page.click('a', { hasText: 'Git Pocket Guide' });
    await expect(page.locator('.main-header')).toHaveText('Book Store');
    await expect(page.locator('#title-wrapper')).toContainText('Git Pocket Guide');
  });
});