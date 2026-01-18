const header = require('./components/headerComponent');
const footer = require('./components/footerComponent');

module.exports = {
  // Define selectors for checkout page elements
  elements: {
    header_container: header.elements,
            
        sub_header_menu_container:{
          container_id: '[data-test="secondary-header"]',
          title: '[data-test="title"]',
        },
        
       confirmation_container:{
          container: '[data-test="checkout_complete_container"]',
          check_mark_icon: '[data-test="pony-express"]',
          confirmation_header: '[data-test="complete-header"]',
          confirmation_message: '[data-test="complete-text"]',
          back_home_button: '[data-test="back-to-products"]',
        },
    
        footer_container: footer.elements,
    }
};