/**
 * Cart Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo shopping cart page.
 * Users land here after clicking the cart icon from the inventory page.
 */

module.exports = {
  // Define selectors for cart page elements
  elements: {
    // TODO: Add cart items container selector
    // Hint: Find the container that holds all cart items
    // cartItemsContainer: '.cart_list',
    
    
    // TODO: Add individual cart item selector
    // Hint: Find individual cart item elements
    // cartItem: '.cart_item',
    
    
    // TODO: Add product name in cart selector
    // Hint: Find where product names are displayed in the cart
    // cartItemName: '.inventory_item_name',
    
    
    // TODO: Add checkout button selector
    // Hint: Find the "Checkout" button
    // checkoutButton: '#checkout',
    
    
    // TODO: Add "Continue Shopping" button selector
    // Hint: Find the button to go back to inventory
    // continueShopping: '#continue-shopping',
    
    
    // TODO: Add remove button selector (for removing items from cart)
    // Hint: Find the "Remove" button for cart items
    // removeButton: '[data-test*="remove"]',
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
