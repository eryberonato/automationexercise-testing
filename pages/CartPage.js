// pages/CartPage.js
// Page Object Model for the Automation Exercise Cart page

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartRows = page.locator('#cart_info_table tbody tr');
    this.deleteButtons = page.locator('.cart_quantity_delete');
    this.proceedToCheckoutButton = page.locator('a:has-text("Proceed To Checkout")');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/view_cart');
  }

  async getItemCount() {
    return await this.cartRows.count();
  }

  async removeItemByIndex(index) {
  const rowToRemove = this.cartRows.nth(index);
  await this.deleteButtons.nth(index).click();
  await rowToRemove.waitFor({ state: 'detached' }); 
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutButton.click();
  }
}

module.exports = { CartPage };
