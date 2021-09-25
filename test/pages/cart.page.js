import Page from "./page";
import {expect} from 'chai'

class CartPage extends Page {

  get addedItemsInCartList(){
    return $$('.inventory_item_name')
  }

  get cartRemoveBtnList(){
    return $$('.cart_button')
  }

  get addedItemsPriceList(){
    return $$('.inventory_item_price')
  }

  get continueShoppingBtn(){
    return $('[data-test=continue-shopping]')
  }

  get checkoutBtn(){
    return $('[data-test=checkout]')
  }

  verifyItemsInCart(){
    let addedItemsInCart = [];
    for(let count = 0; count < this.addedItemsInCartList.length; count++){
      addedItemsInCart.push({name: this.addedItemsInCartList[count].getText(), price: parseFloat(this.addedItemsPriceList[count].getText().substring(1))})
    }
    expect(browser.config.checkoutItemsList).to.eql(addedItemsInCart);
  }

  removeAllItemsFromCart(){
    this.cartRemoveBtnList.forEach((item) => {
      item.click();
    })
    expect(this.cartRemoveBtnList.length).to.equal(0)
  }

  continueShopping(){
    this.continueShoppingBtn.waitForDisplayed();
    this.continueShoppingBtn.click()
  }

  continueToCheckout(){
    this.checkoutBtn.click();
  }
}

export default new CartPage()