/**
 * Test Case: Add Item to Cart
 * 
 * User Story: As a logged-in user, I want to add a product to my cart so I can purchase it
 * 
 * Pre-conditions:
 *   - User is logged in and on the inventory page
 *   - At least one product is visible
 *   - Cart is empty (count shows 0 or is not visible)
 * 
 * Test Steps:
 *   1. Navigate to the SauceDemo login page
 *   2. Log in with valid credentials
 *   3. Identify a product on the inventory page
 *   4. Click "Add to Cart" button for the product
 * 
 * Expected Results:
 *   - The button text changes from "Add to Cart" to "Remove from Cart"
 *   - A cart badge appears with count "1" in the top right
 *   - Product is now in the shopping cart
 * 
 * Post-conditions:
 *   - Cart contains 1 item
 *   - User can proceed to checkout
 */

// Import required modules
const loginPage = require('../pages/loginPage'); // Login page object
const inventoryPage = require('../pages/inventoryPage'); // Inventory page object

// Test case definition
module.exports = {
  // Tag this test for filtering and organization
  '@tags': ['happy-path', 'cart', 'add-to-cart'],
  'Add item to cart': function(browser) {
    // TODO: Step 1 - Navigate to login page
    // Hint: Use browser.url() with the BASE_URL from .env
    
    
    // TODO: Step 2 - Log in with valid credentials
    // Hint: Reuse login logic or create a helper function
    // Use standard_user and secret_sauce
    
    
    // TODO: Step 3 - Identify and add first product to cart
    // Hint: Find the first "Add to Cart" button and click it
    // Consider using CSS selectors like [data-test="add-to-cart-sauce-labs-backpack"]
    
    
    // TODO: Assertion 1 - Verify button text changed to "Remove from Cart"
    // Hint: Check the button's text content using getText() or attribute checking
    
    
    // TODO: Assertion 2 - Verify cart badge shows count of 1
    // Hint: Look for a shopping cart badge element
    // Check its text content equals "1"
    
    
    // TODO: Assertion 3 - Verify cart icon is highlighted or visible
    // Hint: Check that the shopping cart element is displayed
    
    
    // TODO: Cleanup - Close the browser session
    // Hint: Use browser.end()
  }
};
