import { test, expect } from '@playwright/test';

test.describe('Swagger API', () => {
  test('GET /BookStore/v1/Books returns 200', async ({ request }) => {
    const response = await request.get('https://demoqa.com/BookStore/v1/Books');
    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.books.length).toBeGreaterThan(0);
  });

  // Add more API endpoint tests as needed
});