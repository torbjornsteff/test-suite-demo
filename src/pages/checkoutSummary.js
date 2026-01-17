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
        
       cart_list_summary_container:{
          container: '[data-test="cart-list"]',
          quantity_label: '[data-test="cart-quantity-label"]',
          description_label: '[data-test="cart-desc-label"]',
          // Summary list: repeated items addressed by index or text matching for stability.
          summary_list: {
             container: '[data-test="inventory-item"]',
             item: {
                name: '[data-test="inventory-item-name"]',
                desc: '[data-test="inventory-item-desc"]',
                price: '[data-test="inventory-item-price"]',
                quantity: '[data-test="item-quantity"]',
            }
        },
        
          
        },
    
       summary_info_container:{
          container: '#checkout_summary_container > div > div.summary_info',
          payment_info: {
            label: '[data-test="payment-info-label"]',
            value: '[data-test="payment-info-value"]',
          },
          shipping_info: {
            label: '[data-test="shipping-info-label"]',
            value: '[data-test="shipping-info-value"]',
          },
          price_summary: {
            // Totals labels; read text and parse numeric values in tests or helpers.
            label: '[data-test="total-info-label"]',
            subtotal_label: '[data-test="subtotal-label"]',
            tax_label: '[data-test="tax-label"]',
            total_label: '[data-test="total-label"]',
          },
          
        },
        cart_footer_container:{
          container: '#checkout_summary_container > div > div.summary_info > div.cart_footer',
          finish_button: '[data-test="finish"]',
          cancel_button: '[data-test="cancel"]',
        },
    
        footer_container: footer.elements,
      },

  commands: [
    {
      getTotals: function(cb) {
        const subtotalSel = '.summary_subtotal_label';
        const taxSel = '.summary_tax_label';
        const totalSel = '.summary_total_label';
        const result = {};
        this.getText(subtotalSel, r1 => {
          result.subtotal = r1.value;
          this.getText(taxSel, r2 => {
            result.tax = r2.value;
            this.getText(totalSel, r3 => {
              result.total = r3.value;
              if (cb) cb(result);
            });
          });
        });
        return this;
      },

      clickFinish: function() {
        return this.click('#finish');
      },

      verifyItemPresent: function(name) {
        const itemNameSel = '[data-test="inventory-item-name"], .inventory_item_name';
        this.expect.element(itemNameSel).text.to.contain(name);
        return this;
      }
    }
  ]
}           