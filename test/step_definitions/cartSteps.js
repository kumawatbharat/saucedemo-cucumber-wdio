import { When, Then } from '@wdio/cucumber-framework'
import cartPage from '../pages/cart.page'

Then(/^I verify that added items are available in cart$/, () => {
  cartPage.verifyItemsInCart();
})

When(/^I remove all added items from cart$/, () => {
  cartPage.removeAllItemsFromCart()
})

When(/^I continue on shopping$/, () => {
  cartPage.continueShopping()
})

When(/^I continue to checkout page$/, () => {
  cartPage.continueToCheckout();
})