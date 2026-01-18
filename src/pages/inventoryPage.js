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
    },
    footer_container: footer.elements,
  },
  
  commands: [
    {
      /**
       * Verify inventory page is loaded
       * 
       * Usage: inventoryPage.verifyPageLoaded()
       */
      verifyPageLoaded: function() {
        this.waitForElementVisible('[class="inventory_list"]', 5000);
        this.expect.element('[data-test="title"]').text.to.contain('Products');
        return this;
      },
      
      
      /**
       * Add first product to cart
       * 
       * Usage: inventoryPage.addFirstProductToCart()
       */
      addFirstProductToCart: function() {
        return this.click('[data-test^="add-to-cart"]');
      },
      
      
      /**
       * Get cart item count
       * 
       * Usage: inventoryPage.getCartCount((count) => { console.log(count); })
       */
      getCartCount: function(cb) {
        this.getText('.shopping_cart_badge', result => {
          const count = parseInt(result.value || '0', 10);
          if (cb) cb(count);
        });
        return this;
      },
      
      
      /**
       * Click on shopping cart
       * 
       * Usage: inventoryPage.clickCart()
       */
      clickCart: function() {
        return this.click('.shopping_cart_link');
      },
      
      
      /**
       * Get button text for a product
       * 
       * @param {number} productIndex - Index of the product (0-based)
       * 
       * Usage: inventoryPage.getProductButtonText(0, (text) => { console.log(text); })
       */
      getProductButtonText: function(productIndex, cb) {
        const selector = '.inventory_list .inventory_item .pricebar button';
        this.api.elements('css selector', selector, res => {
          const el = res.value && res.value[productIndex];
          if (!el) { if (cb) cb(null); return; }
          this.api.elementIdText(el.ELEMENT, textRes => {
            if (cb) cb(textRes.value);
          });
        });
        return this;
      }
    }
  ]
};
