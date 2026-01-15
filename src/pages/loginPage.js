/**
 * Login Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo login page.
 * Using Page Objects makes tests more maintainable and reduces code duplication.
 * 
 * Best Practice: Any time you need to interact with the login page in a test,
 * use this object instead of hardcoding selectors in the test file.
 */

module.exports = {
  // Define URL
  url: process.env.BASE_URL || 'https://www.saucedemo.com/',
  
  // Define page elements and their selectors
  elements: {
    // TODO: Add username input field selector
    // Hint: Inspect the login page to find the input element
    // The selector should be a CSS selector like '#user-name' or '[data-test="username"]'
    // usernameInput: '#user-name',
    
    
    // TODO: Add password input field selector
    // Hint: Find the password input element
    // passwordInput: '#password',
    
    
    // TODO: Add login button selector
    // Hint: Find the login button element
    // loginButton: '#login-button',
    
    
    // TODO: Add error message selector (for negative tests)
    // Hint: Find the error message container
    // errorMessage: '[data-test="error"]',
  },
  
  // Define page actions/commands
  commands: [
    {
      /**
       * Navigate to the login page
       * 
       * Usage: loginPage.navigate()
       */
      navigate: function() {
        return this.navigate(this.url);
      },
      
      /**
       * Log in with provided credentials
       * 
       * @param {string} username - Username to login with
       * @param {string} password - Password to login with
       * 
       * Usage: loginPage.login('standard_user', 'secret_sauce')
       */
      // TODO: Implement login function
      // Hint: The function should:
      //   1. Set the value of the username input
      //   2. Set the value of the password input
      //   3. Click the login button
      //   4. Wait for navigation to complete
      // login: function(username, password) {
      //   return this
      //     .setValue('@usernameInput', username)
      //     .setValue('@passwordInput', password)
      //     .click('@loginButton')
      //     .waitForElementNotPresent('@loginButton', 5000); // Wait for navigation
      // },
      
      
      /**
       * Get error message text
       * 
       * Usage: loginPage.getErrorMessage((text) => { console.log(text); })
       */
      // TODO: Implement getErrorMessage function
      // Hint: Use getText() on the error message element
      
      
      /**
       * Check if error message is visible
       * 
       * Usage: loginPage.isErrorVisible((isVisible) => { console.log(isVisible); })
       */
      // TODO: Implement isErrorVisible function
      // Hint: Use elementIdDisplayed() or check visibility with expect()
    }
  ]
};
