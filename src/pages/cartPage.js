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
  },
  
  commands: [
    {
      /**
       * Verify cart page loaded with items
       * 
       * Usage: cartPage.verifyCartLoaded()
       */
      verifyCartLoaded: function() {
        this.waitForElementVisible('[data-test="cart-list"]', 5000);
        this.expect.element('[data-test="title"]').text.to.equal('Your Cart');
        return this;
      },
      
      /**
       * Get count of items in cart
       * 
       * Usage: cartPage.getCartItemCount((count) => { console.log(count); })
       */
      getCartItemCount: function(cb) {
        this.api.elements('css selector', '[data-test="inventory-item"]', res => {
          const count = res.value ? res.value.length : 0;
          if (cb) cb(count);
        });
        return this;
      },
      
      /**
       * Get product names in cart
       * 
       * Usage: cartPage.getProductNames((names) => { console.log(names); })
       */
      getProductNames: function(cb) {
        const names = [];
        this.api.elements('css selector', '[data-test="inventory-item-name"]', res => {
          if (!res.value || res.value.length === 0) {
            if (cb) cb([]);
            return;
          }
          res.value.forEach((el, idx) => {
            this.api.elementIdText(el.ELEMENT, textRes => {
              names.push(textRes.value);
              if (idx === res.value.length - 1 && cb) cb(names);
            });
          });
        });
        return this;
      },
      
      /**
       * Click checkout button
       * 
       * Usage: cartPage.clickCheckout()
       */
      clickCheckout: function() {
        return this.click('[data-test="checkout"]');
      },
      
      /**
       * Remove item from cart by index
       * 
       * @param {number} itemIndex - Index of item to remove (0-based)
       * 
       * Usage: cartPage.removeItem(0)
       */
      removeItem: function(itemIndex) {
        this.api.elements('css selector', '[data-test^="remove-"]', res => {
          const el = res.value && res.value[itemIndex];
          if (el) {
            this.api.elementIdClick(el.ELEMENT);
          }
        });
        return this;
      }
    }
  ]
};
