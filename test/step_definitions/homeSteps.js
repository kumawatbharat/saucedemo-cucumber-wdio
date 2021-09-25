import { Then } from '@wdio/cucumber-framework'
import homePage from '../pages/home.page'

Then(/^I sort items "([^"]*)" price$/, (option) => {
  homePage.sort(option)
})

Then(/^I verify items are sorted "([^"]*)" successfully$/, (option) => {
  homePage.verifyItemSorted(option);
})