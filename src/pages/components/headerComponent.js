/**
 * Header Component
 * 
 * Shared component for the page header that appears on multiple pages.
 * Includes the primary header and burger menu which are accessible from 
 * the inventory page, cart page, and checkout page.
 * 
 * Usage in page objects:
 * const header = require('../components/headerComponent');
 * 
 * Then in elements:
 * header_container: header.elements,
 */


module.exports = {
  elements: {
    container: '[data-test="header-container"]',
    primary_header: {
      container_id: '[data-test="primary-header"]',
      burger_menu_button: '[data-test="open-menu"]',
      page_title: '.#header_container > div.primary_header > div.header_label',
      shopping_cart_button: '[data-test="shopping-cart-link"]',
      shopping_cart_badge: '[data-test="shopping-cart-badge"]',
    },
    burger_menu: {
      menu_container: '#menu_button_container > div > div.bm-menu-wrap', // Visible when menu is open
      all_items_link: '[data-test="inventory-sidebar-link"]',
      close_button: '[data-test="close-menu"]',
      logout_link: '[data-test="logout-sidebar-link"]',
      about_link: '[data-test="about-sidebar-link"]',
      reset_app_state_link: '[data-test="reset-sidebar-link"]',
    }
  }
};
