/**
 * Login Helper
 *
 * Logs in with any provided user object.
 * Returns a result indicating success or the error text on failure.
 */

const loginPage = require('../pages/loginPage');
const inventoryPage = require('../pages/inventoryPage');
const headerComponent = require('../pages/components/headerComponent');
const { password: defaultPassword } = require('../pages/login_credentials');

const loginPageElements = loginPage.elements;
const loginPageUrl = loginPage.url;
const inventoryUrl = inventoryPage.url;
const headerPrimary = headerComponent.elements.primary_header.container_id;

module.exports = {
  /**
   * Attempt login with provided user and optional password override.
   * Does not assert; returns an object describing the outcome.
   *
   * @param {NightwatchBrowser} browser
   * @param {{ username: string }} user
   * @param {string} [passwordOverride]
   * @returns {Promise<{success: boolean, errorText: string|null}>}
   */
  async login(browser, user, passwordOverride) {
    const pwd = passwordOverride || defaultPassword;

    // Navigate and submit credentials
    await browser.url(loginPageUrl);
    await browser.waitForElementVisible(loginPageElements.login_container.container_id, 5000);
    await browser.setValue(loginPageElements.login_container.usernameInput, user.username);
    await browser.setValue(loginPageElements.login_container.passwordInput, pwd);
    await browser.click(loginPageElements.login_container.loginButton);

    // Detect success via URL OR header visibility; else capture error
    // Small pause to allow navigation to start
    await browser.pause(200);

    // Try URL check first (more reliable), without assertions
    const currentUrl = await new Promise((resolve) => {
      try {
        browser.url((res) => resolve(res && res.value ? res.value : ''));
      } catch (_) {
        resolve('');
      }
    });

    if (typeof currentUrl === 'string' && currentUrl.includes('/inventory')) {
      return { success: true, errorText: null };
    }

    // Fallback: header becomes visible after a successful login
    try {
      await browser.waitForElementVisible(headerPrimary, 2000);
      return { success: true, errorText: null };
    } catch (_) {
      // Header not visible → check for login error text
      let message = null;
      try {
        const errSel = loginPageElements.login_container.error_state.errorMessage;
        await browser.waitForElementVisible(errSel, 3000);
        await browser.getText(errSel, (res) => { message = res && res.value ? res.value : null; });
      } catch (e2) {
        message = 'Login failed (no error text found)';
      }
      return { success: false, errorText: message };
    }
  }
};
