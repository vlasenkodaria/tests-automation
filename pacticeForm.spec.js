import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Automation Practice Form', () => {
  test('fill and submit the form', async ({ page }) => {
    await page.goto('/automation-practice-form');

    // Fill basic info
    await page.fill('#firstName', 'Daria');
    await page.fill('#lastName', 'Vlasenko');
    await page.fill('#userEmail', 'daria@example.com');
    await page.click('label[for="gender-radio-2"]'); // Female
    await page.fill('#userNumber', '1234567890');

    // Set date of birth
    await page.click('#dateOfBirthInput');
    await page.selectOption('.react-datepicker__month-select', '5'); // June
    await page.selectOption('.react-datepicker__year-select', '1995');
    await page.click('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)');

    // Subjects
    await page.fill('#subjectsInput', 'Maths');
    await page.keyboard.press('Enter');

    // Hobbies
    await page.click('label[for="hobbies-checkbox-1"]'); // Sports

    // Upload picture (assumes file.text is in the same folder)
    const filePath = path.resolve(__dirname, 'file.text');
    await page.setInputFiles('#uploadPicture', filePath);

    // Address
    await page.fill('#currentAddress', 'Frankfurt, Germany');

    // State and City (select via keyboard for dynamic dropdowns)
    await page.click('#state');
    await page.getByText('NCR').click();
    await page.click('#city');
    await page.getByText('Delhi').click();

    // Submit
    await page.click('#submit');

    // Assert modal appears with submitted data
    await expect(page.locator('.modal-content')).toBeVisible();
    await expect(page.locator('td')).toContainText('Daria Vlasenko');
    await expect(page.locator('td')).toContainText('daria@example.com');
    await expect(page.locator('td')).toContainText('Female');
    await expect(page.locator('td')).toContainText('1234567890');
    await expect(page.locator('td')).toContainText('15 June,1995');
    await expect(page.locator('td')).toContainText('Maths');
    await expect(page.locator('td')).toContainText('Sports');
    await expect(page.locator('td')).toContainText('file.text');
    await expect(page.locator('td')).toContainText('Frankfurt, Germany');
    await expect(page.locator('td')).toContainText('NCR Delhi');
  });
});