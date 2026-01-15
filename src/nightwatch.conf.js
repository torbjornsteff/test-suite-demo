// Nightwatch configuration file
// Configures how Nightwatch runs tests, timeouts, and browser capabilities

require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  // Test environments available
  src_folders: ['src/tests'], // Where test files are located
  page_objects_path: ['src/pages'], // Where page objects are located
  custom_commands_path: ['src/customcommands'], // Where custom commands are located
  
  // Global test settings
  test_settings: {
    default: {
      // Browser and Selenium configuration
      selenium: {
        start_process: true, // Let Nightwatch manage Selenium
        server_path: require('@nightwatch/selenium-server').path, // Path to Selenium
        port: 4444, // Selenium server port
      },
      
      // Browser capabilities
      desiredCapabilities: {
        browserName: 'chrome', // Use Chrome browser
        chromeOptions: {
          w3c: false, // Use JSONWire protocol for compatibility
          args: [
            '--disable-gpu',
            '--window-size=1920,1080'
          ]
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
      selenium: {
        start_process: true,
        server_path: require('@nightwatch/selenium-server').path,
        port: 4444,
      },
      
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          w3c: false,
          args: [
            '--disable-gpu',
            '--window-size=1920,1080',
            '--headless', // Run without GUI
            '--no-sandbox', // Required for some environments
            '--disable-dev-shm-usage' // Reduce memory usage
          ]
        }
      },
      
      globals: {
        waitForConditionTimeout: 5000,
        retryAssertionTimeout: 5000,
      },
    },
  },
};
