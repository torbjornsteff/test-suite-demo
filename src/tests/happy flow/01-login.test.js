/**
 * Test Case: Login with Valid Credentials
 * 
 * User Story: As a user, I want to log in with valid credentials so I can access the inventory
 * 
 * Pre-conditions:
 *   - User is on the SauceDemo login page
 *   - Valid credentials are available (standard_user / secret_sauce)
 * 
 * Test Steps:
 *   1. Navigate to the SauceDemo login page
 *   2. Enter valid username (standard_user)
 *   3. Enter valid password (secret_sauce)
 *   4. Click the Login button
 * 
 * Expected Results:
 *   - User is redirected to the inventory page (product list displayed)
 *   - No error messages are shown
 *   - User sees the products on the page
 * 
 * Post-conditions:
 *   - User is successfully logged in and can see products
 */

// Import required modules
const homePage = require('../pages/loginPage'); // Import the login page object

// Test case definition
module.exports = {
  // Give your test a descriptive name
  '@tags': ['happy-path', 'login'],
  'Login with valid credentials': function(browser) {
    // TODO: Step 1 - Navigate to the SauceDemo login page
    // Hint: Use homePage.navigate() if available, or use browser.url()
    
    
    // TODO: Step 2 - Enter valid username
    // Hint: Find the username input field and set its value
    // Consider using environment variables for credentials
    
    
    // TODO: Step 3 - Enter valid password
    // Hint: Find the password input field and set its value
    
    
    // TODO: Step 4 - Click the Login button
    // Hint: Find the login button and click it
    
    
    // TODO: Assertion 1 - Verify user is on inventory page
    // Hint: Check if a key element exists (like a product list or specific heading)
    // Use browser.assert or browser.expect()
    
    
    // TODO: Assertion 2 - Verify no error messages are displayed
    // Hint: Check that error message elements are NOT visible
    
    
    // TODO: Cleanup - Close the browser session
    // Hint: Use browser.end()
  }
};
