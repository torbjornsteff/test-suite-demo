/**
 * Test Case: Complete Checkout Flow
 * 
 * User Story: As a user with items in my cart, I want to complete the checkout process 
 *             so I can purchase my items
 * 
 * Pre-conditions:
 *   - User is logged in
 *   - User has added at least one item to cart
 *   - Cart is visible with item count > 0
 * 
 * Test Steps:
 *   1. Navigate to the SauceDemo login page
 *   2. Log in with valid credentials
 *   3. Add a product to the cart
 *   4. Click on the shopping cart icon
 *   5. Verify product is in the cart
 *   6. Click "Checkout" button
 *   7. Fill in shipping information (First Name, Last Name, Postal Code)
 *   8. Click "Continue" button
 *   9. Verify order total is calculated correctly
 *   10. Click "Finish" button
 * 
 * Expected Results:
 *   - User is taken through the checkout flow without errors
 *   - Cart displays the added product
 *   - Checkout form accepts the shipping information
 *   - Order confirmation page is displayed
 *   - Success message or confirmation order number is shown
 * 
 * Post-conditions:
 *   - Order has been placed successfully
 *   - User sees order confirmation
 */

// Import required modules
const loginPage = require('../pages/loginPage'); // Login page object
const inventoryPage = require('../pages/inventoryPage'); // Inventory page object
const cartPage = require('../pages/cartPage'); // Cart page object
const checkoutPage = require('../pages/checkoutPage'); // Checkout page object

// Test case definition
module.exports = {
  // Tag this test for filtering and organization
  '@tags': ['happy-path', 'checkout', 'complete-purchase'],
  'Complete checkout flow': function(browser) {
    // TODO: Step 1-3 - Navigate, login, and add product to cart
    // Hint: Reuse the login flow and add-to-cart logic from previous tests
    
    
    // TODO: Step 4 - Click on the shopping cart icon
    // Hint: Find the shopping cart link/button in the top right
    // Use browser.click() or browser.expect().element().to.be.visible()
    
    
    // TODO: Step 5 - Verify product is in the cart
    // Hint: Check that the product name/details are displayed on cart page
    
    
    // TODO: Step 6 - Click "Checkout" button
    // Hint: Find and click the checkout button on the cart page
    
    
    // TODO: Step 7 - Fill in shipping information
    // Hint: Fill in three fields:
    //       - First Name: "John"
    //       - Last Name: "Doe"
    //       - Postal Code: "12345"
    
    
    // TODO: Step 8 - Click "Continue" button
    // Hint: Find and click the continue button
    
    
    // TODO: Step 9 - Verify order total
    // Hint: Check that order total is displayed and is a valid number
    // Consider using getText() to extract the total
    
    
    // TODO: Step 10 - Click "Finish" button
    // Hint: Find and click the finish button to complete purchase
    
    
    // TODO: Assertion 1 - Verify success/confirmation message
    // Hint: Look for text like "Thank you for your order" or success page title
    
    
    // TODO: Assertion 2 - Verify confirmation details are displayed
    // Hint: Check for order details or dispatch information
    
    
    // TODO: Cleanup - Close the browser session
    // Hint: Use browser.end()
  }
};
