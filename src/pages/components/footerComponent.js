/**
 * Footer Component
 * 
 * Shared component for the page footer that appears on multiple pages.
 * Includes social media links and copyright information.
 * This footer is accessible from the inventory page, cart page, and checkout page.
 * 
 * Usage in page objects:
 * const footer = require('../components/footerComponent');
 * 
 * Then in elements:
 * footer_container: footer.elements,
 */

module.exports = {
  elements: {
    container: '[data-test="footer"]',
    social_media_container: {
      twitter_link: '[data-test="social-twitter"]',
      facebook_link: '[data-test="social-facebook"]',
      linkedin_link: '[data-test="social-linkedin"]',
    },
    copyright_text: '[data-test="footer_copy"]',
  }
};
