/**
 * Checkout Page Object
 * 
 * This file contains all selectors and interactions for the SauceDemo checkout pages.
 * There are multiple steps: Shipping Info, Review, and Confirmation.
 */

const header = require('./components/headerComponent');
const footer = require('./components/footerComponent');
const credentials = require('./login_credentials');

module.exports = {
  // Define selectors for checkout page elements
  // Selector strategy: prefer [data-test] attributes for stability; use CSS fallback only when necessary.
  // Error icons share a common data-test; assert visibility relative to each field's container (first_name/last_name/postal_code).
  url: 'https://www.saucedemo.com/checkout-step-one.html',
  elements: {
    header_container: header.elements,
            
        sub_header_menu_container:{
          container: '[data-test="secondary-header"]',
          title: '[data-test="title"]',
          quantity_label: '[data-test="cart-quantity-label"]',
          description_label: '[data-test="cart-desc-label"]',
        },
        
       checkout_info_container:{
          container: '[data-test="checkout-info-container"]',
          first_name: {
            inputfield: '[data-test="firstName"]',
            error_state: '[data-test="times-circle"]'
          } ,
          last_name: {
            inputfield: '[data-test="lastName"]',
            error_state: '[data-test="times-circle"]'
          },
          postal_code: {
            inputfield: '[data-test="postalCode"]',
            error_state: '[data-test="times-circle"]'
          }
          
        },
    
        checkout_container:{
          container: '#checkout_info_container > div > form > div.checkout_buttons',
          continue_button: '[data-test="continue"]',
          cancel_button: '[data-test="cancel"]',
          
        },
    
        footer_container: footer.elements,
  },
  
  commands: [
    {
      // Commands model user actions to keep tests declarative.
      // Tests should assert outcomes (titles, success messages, error visibility) rather than implementation details.
      /**
       * Fill in shipping information
       * 
       * @param {string} firstName - First name
       * @param {string} lastName - Last name
       * @param {string} postalCode - Postal/zip code
       * 
       * Usage: checkoutPage.fillShippingInfo('John', 'Doe', '12345')
       */
      fillShippingInfo: function(firstName, lastName, postalCode) {
        return this
          .setValue('[data-test="firstName"]', firstName)
          .setValue('[data-test="lastName"]', lastName)
          .setValue('[data-test="postalCode"]', postalCode);
      },

      fillShippingInfoFromUser: function(userKey) {
        const user = credentials.users[userKey];
        return this.fillShippingInfo(user.first_name, user.last_name, user.zip_code);
      },
      
      
      /**
       * Click continue button on shipping step
       * 
       * Usage: checkoutPage.clickContinue()
       */
      clickContinue: function() {
        return this.click('[data-test="continue"]');
      },
      
      
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
      clickFinish: function() {
        return this.click('#finish');
      },
      
      
      /**
       * Get success message text
       * 
       * Usage: checkoutPage.getSuccessMessage((message) => { console.log(message); })
       */
      getSuccessMessage: function(cb) {
        this.getText('.complete-header', result => {
          if (cb) cb(result.value);
        });
        return this;
      },
      
      
      /**
       * Verify checkout completed successfully
       * 
       * Usage: checkoutPage.verifyOrderComplete()
       */
      verifyOrderComplete: function(expected = 'Thank you for your order!') {
        this.expect.element('.complete-header').text.to.contain(expected);
        return this;
      }
    }
  ]
};
