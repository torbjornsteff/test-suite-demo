/**
 * Inventory Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo inventory page.
 * The inventory page displays the product list after successful login.
 */

module.exports = {
  // Define selectors for inventory page elements
  elements: {
    // TODO: Add inventory container selector
    // Hint: Find the main container that holds all products
    // inventoryContainer: '.inventory',
    
    
    // TODO: Add product item selector
    // Hint: Find individual product items (they're likely in a list/grid)
    // productItem: '.inventory_item',
    
    
    // TODO: Add "Add to Cart" button selector
    // Hint: Find the button that adds items to cart (usually contains "Add to Cart" text)
    // addToCartButton: '[data-test="add-to-cart-sauce-labs-backpack"]',
    
    
    // TODO: Add shopping cart badge selector
    // Hint: Find the badge that shows cart item count (top right area)
    // cartBadge: '.shopping_cart_badge',
    
    
    // TODO: Add shopping cart link selector
    // Hint: Find the shopping cart icon/link to view cart
    // cartLink: '.shopping_cart_link',
    
    
    // TODO: Add page title or heading selector (to verify page loaded)
    // Hint: Find a heading like "Products" or the main title
    // pageTitle: '.title',
  },
  
  commands: [
    {
      /**
       * Verify inventory page is loaded
       * 
       * Usage: inventoryPage.verifyPageLoaded()
       */
      // TODO: Implement verifyPageLoaded
      // Hint: Check that inventory container is visible
      
      
      /**
       * Add first product to cart
       * 
       * Usage: inventoryPage.addFirstProductToCart()
       */
      // TODO: Implement addFirstProductToCart
      // Hint: Click the first "Add to Cart" button
      
      
      /**
       * Get cart item count
       * 
       * Usage: inventoryPage.getCartCount((count) => { console.log(count); })
       */
      // TODO: Implement getCartCount
      // Hint: Get text from cart badge and parse as integer
      
      
      /**
       * Click on shopping cart
       * 
       * Usage: inventoryPage.clickCart()
       */
      // TODO: Implement clickCart
      // Hint: Click the cart link/icon
      
      
      /**
       * Get button text for a product
       * 
       * @param {number} productIndex - Index of the product (0-based)
       * 
       * Usage: inventoryPage.getProductButtonText(0, (text) => { console.log(text); })
       */
      // TODO: Implement getProductButtonText
      // Hint: Find the button text of a specific product by index
    }
  ]
};
