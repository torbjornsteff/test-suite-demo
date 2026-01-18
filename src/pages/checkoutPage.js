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

        error_state: {
          errorMessage: '[data-test="error"]',
        },
    
        footer_container: footer.elements,
  }
};
