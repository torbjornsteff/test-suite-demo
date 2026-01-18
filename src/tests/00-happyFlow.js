/**
 * Happy Path Flow Test Suite
 * 
 * Tests the complete purchase flow:
 * 1. Login with valid credentials
 * 2. Add product to cart and verify price is captured
 * 3. Complete checkout with customer info, verify price calculation, and confirm order
 * 
 * Uses persistent browser session across all test cases.
 * Includes price validation: subtotal + tax = total (with 1-cent tolerance)
 */

// ========== IMPORTS & PAGE OBJECTS ==========
const logHelper = require('../helpers/logHelper');
const loginPage = require('../pages/loginPage');
const inventoryPage = require('../pages/inventoryPage');
const {users, password} = require('../pages/login_credentials');
const headerComponent = require('../pages/components/headerComponent');
const cartPage = require('../pages/cartPage');
const customerInfoPage = require('../pages/checkoutPage');
const checkoutSummaryPage = require('../pages/checkoutSummary');

// ========== ELEMENT SHORTCUTS ==========
// Reusable selectors and URLs to reduce repetition in test steps
const user = users.standard_user; // Use standard_user for this test
const siteTitle = headerComponent.elements.primary_header.container_id;
const shopping_cart_badge = headerComponent.elements.primary_header.shopping_cart_badge;
const cartButton = headerComponent.elements.primary_header.shopping_cart_button;

const loginPageElements = loginPage.elements
const loginPageUrl = loginPage.url

const inventoryPageElements = inventoryPage.elements;
const inventoryUrl = inventoryPage.url;
const inventoryListContainer = inventoryPageElements.inventory_list_container;  

const cartUrl = cartPage.url;
const cartPageElements = cartPage.elements;
const cartPageFooter = cartPageElements.cart_footer_container;

const customerInfoUrl = customerInfoPage.url;
const customerInfoInput = customerInfoPage.elements.checkout_info_container;
const customerInfoButtons = customerInfoPage.elements.checkout_container;

const checkoutSummaryUrl = checkoutSummaryPage.url;
const checkoutSummaryElements = checkoutSummaryPage.elements.cart_list_summary_container;

// ========== TEST STATE ==========
// Module-level variable to store item price between test cases
let itemPrice = null;

// ========== TEST SUITE ==========
module.exports = {
  '@tags': ['happy-path'],

  before: async (browser) => {
    logHelper.section('Happy Path Flow - E2E Test');
    await browser.resizeWindow(1280, 900);
    logHelper.info('Browser resized to 1280x900');
  },

  'Login with valid credentials': async (browser) => {
    // Set user context for logging
    logHelper.setUser(user.username);
    
    logHelper.step('Navigate to login page');
    await browser.url(loginPageUrl);
    await browser.waitForElementVisible(loginPageElements.login_container.container_id, 5000);
    logHelper.pass('Login page loaded and container visible');
    
    logHelper.step('Verify username input');
    await browser.assert.visible(loginPageElements.login_container.usernameInput, 'Username input is visible', 1000);
    logHelper.pass('Username input is visible');
    
    logHelper.step('Enter username');
    await browser.setValue(loginPageElements.login_container.usernameInput, user.username);
    logHelper.pass(`Username entered: ${user.username}`);
    
    logHelper.step('Verify password input');
    await browser.assert.visible(loginPageElements.login_container.passwordInput, 'Password input is visible', 1000);
    logHelper.pass('Password input is visible');
    
    logHelper.step('Enter password');
    await browser.setValue(loginPageElements.login_container.passwordInput, password);
    logHelper.pass('Password entered');
    
    logHelper.step('Verify login button');
    await browser.assert.visible(loginPageElements.login_container.loginButton, 'Login button is visible', 1000);
    logHelper.pass('Login button is visible');
    
    logHelper.step('Click login button');
    await browser.click(loginPageElements.login_container.loginButton);
    logHelper.pass('Login button clicked');
    
    logHelper.step('Verify successful login');
    await browser.assert.visible(siteTitle, 'Site title is visible on header', 5000);
    logHelper.pass('Successfully logged in - site title visible on header');
  },

  'Add item into cart': async (browser) => {
   //Inventory page validations and add to cart
    try {
      logHelper.step('Verify on inventory page');
      await browser.assert.urlEquals(inventoryUrl, 'User is on the inventory page URL');
      logHelper.pass('Inventory page URL verified');

      logHelper.step('Verify inventory list is visible');
      await browser.waitForElementVisible(inventoryListContainer.container, 5000);
      logHelper.pass('Inventory list container is visible');

      logHelper.step('Click add to cart button for first product');
      await browser.click(inventoryListContainer.addToCartButton);
      logHelper.pass('Add to cart button clicked for first product');

      logHelper.step('Get price of added item');
      await browser.getText(inventoryPageElements.inventory_list_container.item_elements.price, (result) => {
        itemPrice = parseFloat(result.value.replace('$', ''));
        logHelper.pass(`Item price captured: $${itemPrice.toFixed(2)}`);
      });

      logHelper.step('Verify cart badge shows 1 item');
      await browser.waitForElementVisible(shopping_cart_badge, 5000);
      await browser.getText(shopping_cart_badge, (result) => {
        const cartCount = result.value;
        if (cartCount === '1') {
          logHelper.pass(`Cart badge displays correct count: ${cartCount}`);
        } else {
          throw new Error(`Expected cart count 1, but got ${cartCount}`);
        }
      });
    } catch (error) {
      logHelper.fail(`Error adding item to cart: ${error.message}`);
      throw error;
    }
  },

  'Complete Purchase': async (browser) => {
    try {
      logHelper.step('Verify on inventory page');
      await browser.assert.urlEquals(inventoryUrl, 'User is on the inventory page URL');
      logHelper.pass('Inventory page URL verified');
      
      logHelper.step('Click on shopping cart');
      await browser.click(cartButton);
      logHelper.pass('Shopping cart clicked');
      await browser.waitForElementVisible(shopping_cart_badge, 5000);
      
      logHelper.step('Verify on cart page');
      await browser.assert.urlEquals(cartUrl, 'User is on the cart page URL');
      logHelper.pass('Cart page URL verified');
      await browser.assert.visible(cartPageElements.cart_list_container.container, 'Cart container is visible', 5000);
      logHelper.pass('Cart container is visible');
      
      logHelper.step('Verify cart contains 1 item');
      await browser.elements('css selector', cartPageElements.cart_list_container.items, (result) => {
        const itemCount = result.value ? result.value.length : 0;
        if (itemCount === 1) {
          logHelper.pass(`Cart contains correct number of items: ${itemCount}`);
        } else {
          throw new Error(`Expected 1 item in cart, but found ${itemCount}`);
        }
      });
    } catch (error) {
      logHelper.fail(`Error completing purchase: ${error.message}`);
      throw error;
    }
    logHelper.step('Verify the presence of checkout button');
    await browser.assert.visible(cartPageFooter.checkout_button, 'Checkout button is visible', 5000);
    logHelper.pass('Checkout button is visible');
    logHelper.step('Click the checkout button');
    await browser.click(cartPageFooter.checkout_button);
    logHelper.pass('Checkout button clicked');
    
    // ========== CHECKOUT FORM ==========
    await browser.assert.urlEquals(customerInfoUrl, 'User is on the customer information page URL');
    logHelper.pass('Customer information page URL verified');
    await browser.assert.visible(customerInfoInput.container, 'Customer information container is visible', 1000);
    logHelper.pass('Customer information container is visible');
    logHelper.step('Enter customer information');
    await browser.setValue(customerInfoInput.first_name.inputfield, user.first_name);
    await browser.setValue(customerInfoInput.last_name.inputfield, user.last_name);
    await browser.setValue(customerInfoInput.postal_code.inputfield, user.zip_code);
    logHelper.pass('Customer information entered');
    
    logHelper.step('Check for validation errors before continuing');
    await browser.elements('css selector', '[data-test*="error"]', (result) => {
      const errorCount = result.value ? result.value.length : 0;
      if (errorCount > 0) {
        logHelper.info(`Found ${errorCount} error element(s) on form`);
      }
    });
    
    logHelper.step('Click the continue button to proceed to next checkout step');
    await browser.click(customerInfoButtons.continue_button);
    await browser.pause(2000); // Wait for page navigation
    logHelper.pass('Continue button clicked - proceed to next checkout step');

    // ========== CHECKOUT SUMMARY & PRICE VALIDATION ==========
    await browser.assert.urlEquals(checkoutSummaryUrl, 'User is on the checkout summary page URL');
    logHelper.pass('Checkout summary page URL verified');
    await browser.assert.visible(checkoutSummaryElements.container, 'Checkout summary container is visible', 5000);
    logHelper.pass('Checkout summary container is visible');
    
    logHelper.step('Verify summary by item(s) and total amount');
    await browser.elements('css selector', checkoutSummaryElements.summary_list.container, (result) => {
      const itemCount = result.value ? result.value.length : 0;
      if (itemCount === 1) {
        logHelper.pass(`Summary contains correct number of items: ${itemCount}`);
      } else {
        throw new Error(`Expected 1 item in summary, but found ${itemCount}`);
      }
    });
    
    logHelper.step('Extract subtotal, tax, and total for validation');
    // Extract prices using split() to isolate numeric values from text labels
    const priceLabels = checkoutSummaryPage.elements.summary_info_container.price_summary;
    let subtotal, tax, total;
    await browser.getText(priceLabels.subtotal_label, (result) => {
      subtotal = parseFloat(result.value.split('$')[1]);
      logHelper.info(`Subtotal extracted: $${subtotal.toFixed(2)}`);
    });
    await browser.getText(priceLabels.tax_label, (result) => {
      tax = parseFloat(result.value.split('$')[1]);
      logHelper.info(`Tax extracted: $${tax.toFixed(2)}`);
    });
    await browser.getText(priceLabels.total_label, (result) => {
      total = parseFloat(result.value.split('$')[1]);
      logHelper.info(`Total extracted: $${total.toFixed(2)}`);
    });
    
    logHelper.step('Verify price calculation (subtotal + tax = total)');
    await browser.assert.visible(priceLabels.total_label, 'Total label is visible', 5000);
    
    // Calculate expected total and verify with 1-cent tolerance for floating-point precision
    const expectedTotal = Math.round((subtotal + tax) * 100) / 100;
    if (Math.abs(total - expectedTotal) < 0.01) {
      logHelper.pass(`Price calculation verified: $${subtotal.toFixed(2)} + $${tax.toFixed(2)} = $${total.toFixed(2)}`);
    } else {
      throw new Error(`Price calculation mismatch: expected $${expectedTotal.toFixed(2)}, but got $${total.toFixed(2)}`);
    }
    
    logHelper.step('Click finish button to complete order');
    const finishButton = checkoutSummaryPage.elements.cart_footer_container.finish_button;
    await browser.click(finishButton);
    logHelper.pass('Finish button clicked - order completed');
    
    logHelper.step('Verify order confirmation page loaded');
    await browser.assert.urlContains('checkout-complete', 'User is on the order confirmation page');
    logHelper.pass('Order confirmation page loaded');
    logHelper.info('Happy path flow completed successfully!');

  },

  after: async (browser) => {
    await browser.end();
  }
};
