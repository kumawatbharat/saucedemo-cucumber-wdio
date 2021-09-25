import { expect } from 'chai'
import Page from './page';

class CheckoutPage extends Page{

  get pageTitle(){
    return $('.title')
  }

  verifyOnCheckoutPage(){
    expect(this.pageTitle.getText()).to.equal('CHECKOUT: YOUR INFORMATION')
  }
}

export default new CheckoutPage();