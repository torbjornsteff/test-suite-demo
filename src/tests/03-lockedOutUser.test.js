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

// ========== TEST SUITE ==========
module.exports = {
  '@tags': ['edge-case'],

  before: async (browser) => {
    logHelper.section('Locked-Out User Test');
    await browser.resizeWindow(1280, 900);
    logHelper.info('Browser resized to 1280x900');
  },

  'Login with locked-out user account': async (browser) => {
    // TODO: Navigate to login page
    // TODO: Enter locked_out_user credentials (from login_credentials.js)
    // TODO: Click login button
    // TODO: Verify error message appears indicating account is locked
    // TODO: Verify error is specific to account lock, not generic auth failure
  },

  after: async (browser) => {
    await browser.end();
  }
};
