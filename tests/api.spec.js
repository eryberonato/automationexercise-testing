// tests/api.spec.js
// API testing using Playwright's built-in request context (no browser needed).
// This is the "intermediate/advanced" piece: testing the app's public API directly,
// not just clicking through the UI.

const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://automationexercise.com/api';

test.describe('Products API', () => {
  test('GET /productsList returns 200 and a products array', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/productsList`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBeTruthy();
    expect(body.products.length).toBeGreaterThan(0);

    // Spot-check the shape of one product
    const product = body.products[0];
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product).toHaveProperty('brand');
  });

  test('GET /brandsList returns 200 and a brands array', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/brandsList`);
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(Array.isArray(body.brands)).toBeTruthy();
    expect(body.brands.length).toBeGreaterThan(0);
  });
});

test.describe('Search Product API', () => {
  test('POST /searchProduct with valid keyword returns matching products', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/searchProduct`, {
      form: { search_product: 'top' },
    });
    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.responseCode).toBe(200);
    expect(Array.isArray(body.products)).toBeTruthy();
  });

  test('POST /searchProduct without required param returns 400', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/searchProduct`, {
      form: {},
    });
    // API still returns HTTP 200, but responseCode in the body signals the error
    const body = await response.json();
    expect(body.responseCode).toBe(400);
    expect(body.message).toContain('parameter is missing');
  });
});

test.describe('Login API', () => {
  test('POST /verifyLogin with invalid credentials returns 404 in body', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/verifyLogin`, {
      form: {
        email: 'definitely_not_registered_12345@example.com',
        password: 'wrongpassword',
      },
    });

    const body = await response.json();
    expect(body.responseCode).toBe(404);
    expect(body.message).toContain('User not found');
  });

  test('POST /verifyLogin with missing email returns 400 in body', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/verifyLogin`, {
      form: { password: 'somepassword' },
    });

    const body = await response.json();
    expect(body.responseCode).toBe(400);
    expect(body.message).toContain('parameter is missing');
  });

  test('DELETE /verifyLogin (unsupported method) returns 405 in body', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/verifyLogin`);

    const body = await response.json();
    expect(body.responseCode).toBe(405);
    expect(body.message).toContain('not supported');
  });
});
