import { Then } from '@wdio/cucumber-framework'
import checkoutPage from '../pages/checkout.page';

Then(/^I verify user redirect to checkout page$/, () => {
  checkoutPage.verifyOnCheckoutPage()
})