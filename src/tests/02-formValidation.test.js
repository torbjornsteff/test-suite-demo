/**
 * Edge Case: Form Validation on Checkout
 * 
 * Tests checkout form validation with empty/missing fields.
 * Verifies error states appear and form submission is blocked.
 */

// ========== IMPORTS & PAGE OBJECTS ==========
const logHelper = require('../helpers/logHelper');
const loginHelper = require('../helpers/loginHelper');
const inventoryPage = require('../pages/inventoryPage');
const cartPage = require('../pages/cartPage');
const customerInfoPage = require('../pages/checkoutPage');
const headerComponent = require('../pages/components/headerComponent');
const {users, password} = require('../pages/login_credentials');

// ========== ELEMENT SHORTCUTS ==========
const user = users.standard_user;
const cartUrl = cartPage.url;
const customerInfoUrl = customerInfoPage.url;
const customerInfoInput = customerInfoPage.elements.checkout_info_container;
const customerInfoButtons = customerInfoPage.elements.checkout_container;
const shopping_cart_badge = headerComponent.elements.primary_header.shopping_cart_badge;
const cartButton = headerComponent.elements.primary_header.shopping_cart_button;
const addToCartButton = inventoryPage.elements.inventory_list_container.sauce_labs_backpack;
const checkoutButton = cartPage.elements.cart_footer_container.checkout_button;
const continueButton = customerInfoButtons.continue_button;
const errorContainer = customerInfoPage.elements.error_state.errorMessage;

// ========== TEST SUITE ==========
module.exports = {
  '@tags': ['edge-case'],

  before: async (browser) => {
    logHelper.section('Form Validation Test');
    await browser.resizeWindow(1280, 900);
    logHelper.info('Browser resized to 1280x900');
  },

  'Checkout form validation with empty fields': async (browser) => {
    
    // ===== SETUP: Login and navigate to checkout form =====
    logHelper.step('Login as standard_user', user.username);
    const loginResult = await loginHelper.login(browser, user);
    browser.assert.ok(loginResult.success, loginResult.errorText || 'Login should succeed');
    logHelper.pass('Logged in successfully', user.username);

    // Add first item to cart
    logHelper.step('Add item to cart', user.username);
    
    await browser.waitForElementVisible(addToCartButton, 5000);
    await browser.click(addToCartButton);
    await browser.waitForElementVisible(shopping_cart_badge, 3000);
    logHelper.pass('Item added to cart', user.username);

    // Navigate to cart
    logHelper.step('Navigate to cart', user.username);
    await browser.click(cartButton);
    await browser.assert.urlEquals(cartUrl);
    logHelper.pass('On cart page', user.username);

    // Click checkout
    logHelper.step('Click checkout button', user.username);
    await browser.waitForElementVisible(checkoutButton, 5000);
    await browser.click(checkoutButton);
    await browser.assert.urlEquals(customerInfoUrl);
    logHelper.pass('On checkout form page', user.username);

    // ===== TEST: Attempt continue with empty fields =====
    logHelper.step('Click continue without filling fields', user.username);
    await browser.waitForElementVisible(continueButton, 3000);
    await browser.click(continueButton);

    // Verify error message appears (generic error container pattern like login page)
    logHelper.step('Verify error message displayed for empty fields', user.username);
    await browser.waitForElementVisible(errorContainer, 3000);
    await browser.assert.visible(errorContainer);
    await browser.getText(errorContainer, (result) => {
      if (result.value.includes('Error:')) {
        logHelper.pass(`Field validation error displayed: ${result.value}`, user.username);
      } else {
        logHelper.fail(`Unexpected error text: ${result.value}`, user.username);
      }
    });

    // Verify URL remains on customer info page (form did not submit)
    logHelper.step('Verify form did not submit (still on checkout page)', user.username);
    await browser.assert.urlEquals(customerInfoUrl);
    logHelper.pass('Form submission blocked correctly', user.username);
  },

  after: async (browser) => {
    await browser.end();
  }
};
