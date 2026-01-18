/**
 * Cart Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo shopping cart page.
 * Users land here after clicking the cart icon from the inventory page.
 */
const header = require('./components/headerComponent');
const footer = require('./components/footerComponent');
const { url } = require('./loginPage');

module.exports = {
  url: 'https://www.saucedemo.com/cart.html',
  // Define selectors for cart page elements
  elements: {
    header_container: header.elements,
        
    sub_header_menu_container:{
      container_id: '[data-test="secondary-header"]',
      title: '[data-test="title"]',
      quantity_label: '[data-test="cart-quantity-label"]',
      description_label: '[data-test="cart-desc-label"]',
    },
    
    cart_list_container:{
      container: '[data-test="cart-list"]',
      items: '[data-test="inventory-item"]',
      item_elements: {
        quantity_label: '[data-test="cart-item-quantity"]',
        product_link: '[data-test="item-{itemId}-title-link"]', // Format: item-0-title-link, item-1-title-link, etc. (based on product position)
        product_name: '[data-test="inventory-item-name"]',
        product_description: '[data-test="inventory-item-desc"]',
        product_price: '[data-test="inventory-item-price"]',
        remove_button: '[data-test^="remove-"]', // Matches any remove button (e.g., remove-sauce-labs-backpack)
      }
    },

    cart_footer_container:{
      container: '[data-test="cart-footer"]',
      continue_shopping_button: '[data-test="continue-shopping"]',
      checkout_button: '[data-test="checkout"]',
    },

    footer_container: footer.elements,
  }
};
