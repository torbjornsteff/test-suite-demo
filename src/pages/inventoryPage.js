/**
 * Inventory Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo inventory page.
 * The inventory page displays the product list after successful login.
 */

const header = require('./components/headerComponent');
const footer = require('./components/footerComponent');

module.exports = {
  url: 'https://www.saucedemo.com/inventory.html',
  // Define selectors for inventory page elements
  elements: {
    header_container: header.elements,
    
    sub_header_menu_container:{
      container_id: '[data-test="secondary-header"]',
      title: '[data-test="title"]',
      sort_menu: {
        button: '[data-test="product-sort-container"]',
        options: {
          nameAZ: '[value="az"]',
          nameZA: '[value="za"]',
          priceLowHigh: '[value="lohi"]',
          priceHighLow: '[value="hilo"]',
        }
      },
    },
    
    // Repeated list: use 'items' and match by text for stability; avoid nth-of-type unless order is guaranteed.
    inventory_list_container:{
      container: '[class="inventory_list"]',
      items: '[data-test="inventory-item"]',
      item_elements: {
        label: '[data-test="inventory-item_label"]',
        description: '[data-test="inventory-item-description"]',
        price: '[data-test="inventory-item-price"]',
        // Image ID is based on product ID, not list position
        // Format: item-{productId}-img-link (e.g., item-1-img-link, item-2-img-link)
        image: '[data-test="item-{productId}-img-link"]',
      },
      // Uses data-test prefix to work across products consistently.
      addToCartButton: '[data-test^="add-to-cart"]',
      // Product-specific buttons
      sauce_labs_backpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
    },
    footer_container: footer.elements,
  }
};
