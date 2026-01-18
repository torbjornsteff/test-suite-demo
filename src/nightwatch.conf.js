// Nightwatch configuration file
// Configures how Nightwatch runs tests, timeouts, and browser capabilities

require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  // Test environments available
  src_folders: ['src/tests'], // Where test files are located
  page_objects_path: ['src/pages'], // Where page objects are located
  
  // Set default environment explicitly to Chrome
  test_environment: 'default',
  
  // Global test settings
  test_settings: {
    default: {
      // WebDriver configuration (using ChromeDriver, no Java needed)
      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
        cli_args: ['--verbose']
      },
      
      // Browser capabilities - MUST include browserName for Nightwatch to recognize Chrome
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--disable-gpu',
            '--window-size=1920,1080',
            '--disable-blink-features=AutomationControlled',
            '--disable-save-password-bubble',
            '--disable-features=PasswordManager,PasswordManagerFallback',
            '--no-first-run',
            '--no-default-browser-check',
            '--password-store=basic'
          ],
          prefs: {
            'credentials_enable_service': false,
            'profile.password_manager_enabled': false,
            'profile.password_manager_leak_detection': false,
            'profile.default_content_setting_values.notifications': 2,
            'autofill.profile_enabled': false
          },
          excludeSwitches: ['enable-automation', 'enable-logging']
        }
      },
      
      // Timeout settings (in milliseconds)
      silent: true, // Reduce verbose console output
      output: true, // Display test output
      disable_colors: false, // Allow colored output
      
      // Custom globals and test defaults
      globals: {
        waitForConditionTimeout: 5000, // Max time to wait for conditions
        retryAssertionTimeout: 5000, // Timeout for assertion retries
        abortOnAssertionFailure: false, // Continue even if assertions fail
      },
      
      // Wait times for finding elements
      element_locating_strategy: 'css selector', // Use CSS selectors by default
    },
    
    // Configuration for headless testing (no GUI)
    headless: {
      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        port: 9515,
        cli_args: ['--verbose']
      },
      
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            '--disable-gpu',
            '--window-size=1920,1080',
            '--headless',
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--disable-blink-features=AutomationControlled',
            '--disable-save-password-bubble',
            '--disable-features=PasswordManager,PasswordManagerFallback',
            '--no-first-run',
            '--no-default-browser-check',
            '--password-store=basic'
          ],
          prefs: {
            'credentials_enable_service': false,
            'profile.password_manager_enabled': false,
            'profile.password_manager_leak_detection': false,
            'profile.default_content_setting_values.notifications': 2,
            'autofill.profile_enabled': false
          },
          excludeSwitches: ['enable-automation', 'enable-logging']
        }
      },
      
      globals: {
        waitForConditionTimeout: 5000,
        retryAssertionTimeout: 5000,
      },
    },

    // Configuration for Firefox browser testing
    firefox: {
      webdriver: {
        start_process: true,
        server_path: require('geckodriver').path,
        port: 4444,
        cli_args: ['--verbose']
      },

      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            '--width=1920',
            '--height=1080'
          ],
          prefs: {
            'dom.disable_beforeunload': true,
            'extensions.update.autoUpdateDefault': false,
          }
        }
      },

      silent: true,
      output: true,
      disable_colors: false,

      globals: {
        waitForConditionTimeout: 5000,
        retryAssertionTimeout: 5000,
      },
    },
  },
};
