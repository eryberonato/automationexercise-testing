// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login with invalid credentials shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('not_a_real_user@example.com', 'wrongpassword123');

  await expect(loginPage.loginErrorText).toBeVisible();
});

test('signup with an already-registered email shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();

  // NOTE: replace with an email you know is already registered on the site
  // for this test to demonstrate the "already exist" error correctly.
  await loginPage.signupStart('Test User', 'existing_user@example.com');

  await expect(loginPage.signupErrorText).toBeVisible();
});
