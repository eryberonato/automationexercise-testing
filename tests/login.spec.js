// tests/login.spec.js
require('dotenv').config();
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('login with invalid credentials shows error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('not_a_real_user@example.com', 'wrongpassword123');

  await expect(loginPage.loginErrorText).toBeVisible();
});

test('signup with an already-registered email shows error', async ({ page }) => {
  test.skip(
    !process.env.TEST_EMAIL,
    'TEST_EMAIL not set - copy .env.example to .env and fill in a registered email'
  );

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.signupStart('Test User', process.env.TEST_EMAIL);

  await expect(loginPage.signupErrorText).toBeVisible();
});
