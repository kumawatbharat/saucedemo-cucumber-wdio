import { When } from '@wdio/cucumber-framework'
import loginPage from '../pages/login.page'

When(/^I login with valid credentials$/, () => {
  loginPage.login('standard_user', 'secret_sauce');
})