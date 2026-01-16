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
    title: '#root > div > div.login_logo',
    login_container: {
      container_id: '[data-test="login-container"]',
      usernameInput: '[data-test="username"]',
      passwordInput: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',  
    error_state: {
      errorMessage: '#login_button_container > div > form > div.error-message-container.error',
      close_error_button: '[data-test="error-button"]', 
      error_Icon_username: '#login_button_container > div > form > div:nth-child(1) > svg',
      error_Icon_password: '#login_button_container > div > form > div:nth-child(2) > svg > path',
    }
    
  },
  login_credentials_container: {
    container_id: '[data-test="login-credentials-container"]',
    user_container: {
      container_id: '[data-test="login-credentials"]',
      container_title: '#login_credentials > h4',

      //All these id's are commented out due to missing CSS selectors and data test id\s. Could have used xpath, but chose not to, due to the elements them selves not being critical for functionality of the site.  
      // standard_user: '#login_credentials > :nth-child(1)',
      // locked_out_user: '#login_credentials > :nth-child(2)',
      // problem_user: '#login_credentials > :nth-child(3)', 
      // performance_glitch_user: '#login_credentials > :nth-child(4)',
      // error_user: '#login_credentials > :nth-child(5)',
      // visual_user: '#login_credentials > :nth-child(6)',
    },
    password_container: {
      password: '[data-test="login-password"]',
      container_title: '#root > div > div.login_wrapper > div.login_credentials_wrap > div > div.login_password > h4',
    }
  }
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
