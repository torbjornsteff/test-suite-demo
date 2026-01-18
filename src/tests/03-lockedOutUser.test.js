/**
 * Edge Case: Locked-Out User Account
 * 
 * Tests login attempt with locked-out user account.
 * Verifies specific error message for account lock (not generic login error).
 */

// ========== IMPORTS & PAGE OBJECTS ==========
const logHelper = require('../helpers/logHelper');
const loginPage = require('../pages/loginPage');
const {users, password} = require('../pages/login_credentials');

// ========== ELEMENT SHORTCUTS ==========
const user = users.locked_out_user;
const loginPageElements = loginPage.elements;
const loginPageUrl = loginPage.url;
const errorSelector = loginPageElements.login_container.error_state.errorMessage;
const loginContainer = loginPageElements.login_container.container_id; 

// ========== TEST SUITE ==========
module.exports = {
  '@tags': ['edge-case'],

  before: async (browser) => {
    logHelper.section('Locked-Out User Test');
    await browser.resizeWindow(1280, 900);
    logHelper.info('Browser resized to 1280x900');
  },

  'Login with locked-out user account': async (browser) => {
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

    logHelper.step('Verify error message appears');   
    await browser.waitForElementVisible(errorSelector, 5000);
    await browser.getText(errorSelector, (result) => {
      if (result.value.includes('Epic sadface: Sorry, this user has been locked out.')) {
        logHelper.pass('Correct error message is displayed for locked-out user');
      } else {
        logHelper.fail(`Incorrect error message: ${result.value}`);
      }
    });

    logHelper.step('Verify user is NOT logged in');
    await browser.assert.visible(loginContainer, 'Login container still visible (user not logged in)', 5000);
    logHelper.pass('User is not logged in, login container is still visible');
  },

  after: async (browser) => {
    await browser.end();
  }
};
