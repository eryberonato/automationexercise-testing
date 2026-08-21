// tests/search.spec.js
const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');

test('search for an existing product returns results', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();
  await productsPage.searchProduct('Dress');

  await expect(productsPage.searchedProductsTitle).toHaveText('Searched Products');
  const count = await productsPage.getVisibleProductCount();
  expect(count).toBeGreaterThan(0);
});

test('search with nonsense keyword returns no results', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.goto();
  await productsPage.searchProduct('zzzxxxnonexistent123');

  const count = await productsPage.getVisibleProductCount();
  expect(count).toBe(0);
});
