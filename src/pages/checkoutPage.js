/**
 * Checkout Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo checkout pages.
 * There are multiple steps: Shipping Info, Review, and Confirmation.
 */

module.exports = {
  // Define selectors for checkout page elements
  elements: {
    // Step 1: Shipping Information
    // TODO: Add first name input selector
    // Hint: Find the input for first name
    // firstNameInput: '#first-name',
    
    
    // TODO: Add last name input selector
    // Hint: Find the input for last name
    // lastNameInput: '#last-name',
    
    
    // TODO: Add postal code input selector
    // Hint: Find the input for postal/zip code
    // postalCodeInput: '#postal-code',
    
    
    // TODO: Add continue button selector (for shipping info step)
    // Hint: Find the "Continue" button on the shipping form
    // continueButton: '#continue',
    
    
    // Step 2: Review Order
    // TODO: Add order summary container selector
    // Hint: Find where order details/summary is displayed
    // orderSummary: '.summary_info',
    
    
    // TODO: Add item total selector
    // Hint: Find where item total is displayed
    // itemTotal: '.summary_subtotal_label',
    
    
    // TODO: Add tax amount selector
    // Hint: Find where tax is displayed
    // taxAmount: '.summary_tax_label',
    
    
    // TODO: Add order total selector
    // Hint: Find where total price is displayed
    // orderTotal: '.summary_total_label',
    
    
    // Step 3: Confirmation
    // TODO: Add finish button selector
    // Hint: Find the "Finish" button to complete purchase
    // finishButton: '#finish',
    
    
    // TODO: Add success message selector
    // Hint: Find the thank you/success message element
    // successMessage: '.complete-header',
    
    
    // TODO: Add error message selector
    // Hint: Find error message elements (if any validation fails)
    // errorMessage: '[data-test="error"]',
  },
  
  commands: [
    {
      /**
       * Fill in shipping information
       * 
       * @param {string} firstName - First name
       * @param {string} lastName - Last name
       * @param {string} postalCode - Postal/zip code
       * 
       * Usage: checkoutPage.fillShippingInfo('John', 'Doe', '12345')
       */
      // TODO: Implement fillShippingInfo
      // Hint: Set values for all three input fields:
      //   1. Set first name input
      //   2. Set last name input
      //   3. Set postal code input
      
      
      /**
       * Click continue button on shipping step
       * 
       * Usage: checkoutPage.clickContinue()
       */
      // TODO: Implement clickContinue
      // Hint: Click the continue button
      
      
      /**
       * Get order total amount
       * 
       * Usage: checkoutPage.getOrderTotal((total) => { console.log(total); })
       */
      // TODO: Implement getOrderTotal
      // Hint: Get text from order total element
      //       Extract just the number part (e.g., "$58.29" -> 58.29)
      
      
      /**
       * Click finish button to complete purchase
       * 
       * Usage: checkoutPage.clickFinish()
       */
      // TODO: Implement clickFinish
      // Hint: Click the finish button
      
      
      /**
       * Get success message text
       * 
       * Usage: checkoutPage.getSuccessMessage((message) => { console.log(message); })
       */
      // TODO: Implement getSuccessMessage
      // Hint: Get text from the success message element
      
      
      /**
       * Verify checkout completed successfully
       * 
       * Usage: checkoutPage.verifyOrderComplete()
       */
      // TODO: Implement verifyOrderComplete
      // Hint: Check that success message is visible and contains expected text
    }
  ]
};
