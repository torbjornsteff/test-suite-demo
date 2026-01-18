/**
 * Log Helper - Provides consistent logging for test steps and results
 * 
 * Usage:
 *   logHelper.setUser('standard_user');
 *   logHelper.step('Login with credentials');
 *   logHelper.pass('User successfully logged in');
 *   logHelper.fail('Login button not found');
 */

let currentUser = null;

const logHelper = {
  /**
   * Set the active user for logging context
   * @param {string} userName - Username to display in logs
   */
  setUser: function(userName) {
    currentUser = userName;
    console.log(`\n👤 Session User: ${userName}\n`);
  },

  /**
   * Get formatted user prefix for log messages
   * @returns {string} - User prefix or empty string
   */
  getUserPrefix: function() {
    return currentUser ? `[${currentUser}] ` : '';
  },

  /**
   * Log a test step
   * @param {string} message - Step description
   */
  step: function(message) {
    console.log(`\n📋 STEP: ${this.getUserPrefix()}${message}`);
  },

  /**
   * Log a passing assertion or action
   * @param {string} message - Success message
   */
  pass: function(message) {
    console.log(`   ✅ PASS: ${this.getUserPrefix()}${message}`);
  },

  /**
   * Log a failing assertion or action
   * @param {string} message - Failure message
   */
  fail: function(message) {
    console.log(`   ❌ FAIL: ${this.getUserPrefix()}${message}`);
  },

  /**
   * Log an informational message
   * @param {string} message - Info message
   */
  info: function(message) {
    console.log(`   ℹ️  INFO: ${this.getUserPrefix()}${message}`);
  },

  /**
   * Log test section header
   * @param {string} title - Section title
   */
  section: function(title) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`  ${title}`);
    console.log(`${'='.repeat(60)}`);
  },

  /**
   * Log test completion
   * @param {string} testName - Test name
   * @param {boolean} passed - Whether test passed
   */
  complete: function(testName, passed) {
    const status = passed ? '✨ PASSED' : '❌ FAILED';
    console.log(`\n${status}: ${this.getUserPrefix()}${testName}\n`);
  }
};

module.exports = logHelper;
