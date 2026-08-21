// pages/LoginPage.js
// Page Object Model for the Automation Exercise Login / Signup page

class LoginPage {
  constructor(page) {
    this.page = page;

    // Login form
    this.loginEmailInput = page.locator('input[data-qa="login-email"]');
    this.loginPasswordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loginErrorText = page.locator('p:has-text("incorrect")');

    // Signup form
    this.signupNameInput = page.locator('input[data-qa="signup-name"]');
    this.signupEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signupButton = page.locator('button[data-qa="signup-button"]');
    this.signupErrorText = page.locator('p:has-text("already exist")');

    this.loggedInAsText = page.locator('a:has-text("Logged in as")');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/login');
  }

  async login(email, password) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);
    await this.loginButton.click();
  }

  async signupStart(name, email) {
    await this.signupNameInput.fill(name);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();
  }

  async isLoggedIn() {
    return await this.loggedInAsText.isVisible();
  }
}

module.exports = { LoginPage };
