import { Given } from '@wdio/cucumber-framework';
import loginPage from '../pages/login.page';

Given(/^I Launch browser$/, () => {
  browser.maximizeWindow();
  loginPage.launchSite("/")
})