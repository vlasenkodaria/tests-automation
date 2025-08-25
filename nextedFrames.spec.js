import { test, expect } from '@playwright/test';

test.describe('Nested Frames page', () => {
  test('should get text from parent and child frames', async ({ page }) => {
    await page.goto('/nestedframes');
    // Access the parent frame
    const parentFrame = await page.frame({ name: 'frame1' });
    const parentText = await parentFrame.locator('body').innerText();
    expect(parentText).toContain('Parent frame');

    // Access the child frame inside the parent
    const childFrame = parentFrame.childFrames()[0];
    const childText = await childFrame.locator('body').innerText();
    expect(childText).toContain('Child Iframe');
  });
});