/**
 * Cart Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo shopping cart page.
 * Users land here after clicking the cart icon from the inventory page.
 */
const header = require('./components/headerComponent');
const footer = require('./components/footerComponent');

module.exports = {
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
      items: '[data-test="inventory_item"]',
      item_elements: {
        quantity_label: '[data-test="cart-item-quantity"]',
        product_link: '[data-test="item-{itemId}-title-link"]', // Format: item-0-title-link, item-1-title-link, etc. (based on product position)
        product_name: '[data-test="inventory_item_name"]',
        product_description: '[data-test="inventory_item_desc"]',
        product_price: '[data-test="inventory_item_price"]',
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
      // TODO: Implement verifyCartLoaded
      // Hint: Check that cart items container is visible
      
      
      /**
       * Get count of items in cart
       * 
       * Usage: cartPage.getCartItemCount((count) => { console.log(count); })
       */
      // TODO: Implement getCartItemCount
      // Hint: Count the number of cart item elements
      
      
      /**
       * Get product names in cart
       * 
       * Usage: cartPage.getProductNames((names) => { console.log(names); })
       */
      // TODO: Implement getProductNames
      // Hint: Get text of all product name elements and return as array
      
      
      /**
       * Click checkout button
       * 
       * Usage: cartPage.clickCheckout()
       */
      // TODO: Implement clickCheckout
      // Hint: Click the checkout button
      
      
      /**
       * Remove item from cart by index
       * 
       * @param {number} itemIndex - Index of item to remove (0-based)
       * 
       * Usage: cartPage.removeItem(0)
       */
      // TODO: Implement removeItem
      // Hint: Find and click the remove button for a specific item by index
    }
  ]
};
