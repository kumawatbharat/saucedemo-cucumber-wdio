import { When, Then } from '@wdio/cucumber-framework'
import checkoutPage from '../pages/checkout.page'

Then(/^I verify that added items are available in cart$/, () => {
  checkoutPage.verifyItemsInCart();
})

When(/^I remove all added items from cart$/, () => {
  checkoutPage.removeAllItemsFromCart()
})

When(/^I continue on shopping$/, () => {
  checkoutPage.continueShopping()
})

When(/^I finish checkout$/, () => {
  checkoutPage.finishCheckout();
})