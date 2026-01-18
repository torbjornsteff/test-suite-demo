/**
 * Login Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo login page.
 * Using Page Objects makes tests more maintainable and reduces code duplication.
 * 
 * Best Practice: Any time you need to interact with the login page in a test,
 * use this object instead of hardcoding selectors in the test file.
 */

const credentials = require('./login_credentials');

module.exports = {
  // Define URL
  url: process.env.BASE_URL || 'https://www.saucedemo.com/',
  
  // Define page elements and their selectors
  // Selector strategy: use [data-test] where available; fallback to CSS when necessary to avoid brittle tests.
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
  }
};
