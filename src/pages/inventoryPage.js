/**
 * Inventory Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo inventory page.
 * The inventory page displays the product list after successful login.
 */

const header = require('./components/headerComponent');
const footer = require('./components/footerComponent');

module.exports = {
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
      addToCartButton: '[data-test^="add-to-cart"]',
    },
    footer_container: footer.elements,
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
