/**
 * Negative Test: Invalid Login
 * 
 * Tests login rejection with invalid credentials.
 * Verifies error message appears and user is not logged in.
 */

// ========== IMPORTS & PAGE OBJECTS ==========
const logHelper = require('../helpers/logHelper');
const loginPage = require('../pages/loginPage');
const headerComponent = require('../pages/components/headerComponent');
const {users, password} = require('../pages/login_credentials');

// ========== ELEMENT SHORTCUTS ==========
const user = users.standard_user;
const loginPageElements = loginPage.elements;
const loginPageUrl = loginPage.url;
const loginContainer = loginPageElements.login_container.container_id; // Still on login page = not logged in
const errorSelector = loginPageElements.login_container.error_state.errorMessage;

// ========== TEST SUITE ==========
module.exports = {
  '@tags': ['negative-test'],

  before: async (browser) => {
    logHelper.section('Invalid Login Test');
    await browser.resizeWindow(1280, 900);
    logHelper.info('Browser resized to 1280x900');
  },

  'Login with invalid password': async (browser) => {
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
    logHelper.step('Enter wrong password');
    await browser.setValue(loginPageElements.login_container.passwordInput, 'wrong_password');
    logHelper.pass('Wrong password entered');

    logHelper.step('Verify login button');
    await browser.assert.visible(loginPageElements.login_container.loginButton, 'Login button is visible', 1000);
    logHelper.pass('Login button is visible');
    logHelper.step('Click login button');
    await browser.click(loginPageElements.login_container.loginButton);
    logHelper.pass('Login button clicked');
    
    logHelper.step('Verify error message appears');   
    await browser.waitForElementVisible(errorSelector, 5000);
    const errorText = await browser.getText(errorSelector);
    if (errorText.includes('Epic sadface: Username and password do not match any user in this service')) {
      logHelper.pass('Correct error message is displayed for invalid login');
    } else {
      logHelper.fail('Incorrect error message displayed');
    }

    logHelper.step('Verify user is NOT logged in');
    const isLoginContainerVisible = await browser.isVisible(loginContainer);
    if (isLoginContainerVisible) {
      logHelper.pass('User is not logged in, login container is still visible');
    } else {
      logHelper.fail('User is logged in, login container is not visible');
    }
  },

  after: async (browser) => {
    await browser.end();
  }
};
