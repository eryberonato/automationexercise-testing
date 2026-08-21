// tests/cart.spec.js
const { test, expect } = require('@playwright/test');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test('add product to cart and verify it appears in cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await productsPage.goto();
  await productsPage.addFirstProductToCart();
  await productsPage.goToCartFromModal();

  const count = await cartPage.getItemCount();
  expect(count).toBe(1);
});

test('remove product from cart', async ({ page }) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await productsPage.goto();
  await productsPage.addFirstProductToCart();
  await productsPage.goToCartFromModal();

  expect(await cartPage.getItemCount()).toBe(1);

  await cartPage.removeItemByIndex(0);
  expect(await cartPage.getItemCount()).toBe(0);
});
