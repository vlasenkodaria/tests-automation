import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Upload and Download page', () => {
  test('upload a file', async ({ page }) => {
    await page.goto('/upload-download');
    // Path to file.text in the same folder as this test
    const filePath = path.resolve(__dirname, 'file.text');
    await page.setInputFiles('#uploadFile', filePath);
    await expect(page.locator('#uploadedFilePath')).toContainText('file.text');
  });

  test('download a file', async ({ page }) => {
    await page.goto('/upload-download');
    const [ download ] = await Promise.all([
      page.waitForEvent('download'),
      page.click('#downloadButton'),
    ]);
    expect(download.suggestedFilename()).toBe('sampleFile.jpeg');
    // Optionally, save the file in the same folder:
    // await download.saveAs(path.resolve(__dirname, download.suggestedFilename()));
  });
});