// pages/ProductsPage.js
// Page Object Model for the Automation Exercise Products page

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsLink = page.locator('a[href="/products"]');
    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.productItems = page.locator('.product-image-wrapper');
    this.searchedProductsTitle = page.locator('.title.text-center');
    this.addToCartButtons = page.locator('a:has-text("Add to cart")');
    this.continueShoppingButton = page.locator('button:has-text("Continue Shopping")');
    this.viewCartLink = page.locator('a:has-text("View Cart")');
  }

  async goto() {
    await this.page.goto('https://automationexercise.com/products');
  }

  async searchProduct(keyword) {
    await this.searchInput.fill(keyword);
    await this.searchButton.click();
  }

  async getVisibleProductCount() {
    return await this.productItems.count();
  }

  async addFirstProductToCart() {
    await this.addToCartButtons.first().click();
  }

  async continueShopping() {
    await this.continueShoppingButton.click();
  }

  async goToCartFromModal() {
    await this.viewCartLink.click();
  }
}

module.exports = { ProductsPage };
