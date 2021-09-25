import { expect } from 'chai'
import Page from "./page";

class HomePage extends Page{

  get sortDropDown(){
    return $('[data-test=product_sort_container]')
  }

  get itemsPriceList(){
    return $$('.inventory_item_price')
  }

  get checkoutBtnList(){
    return $$('.btn_inventory')
  }

  get inventoryItemsList(){
    return $$('.inventory_item_name')
  }

  get checkoutBtn(){
    return $('.shopping_cart_badge')
  }

  sort(option){
    this.sortDropDown.waitForDisplayed();
    if(option === 'lowest to highest')
      this.sortDropDown.selectByAttribute('value', 'lohi');
  }

  verifyItemSorted(option){
    let sorted = true;
    const priceList = this.itemsPriceList.map((element) => parseFloat(element.getText().substring(1)))
    if(option === 'lowest to highest'){
      for(let count=0; count<priceList.length-1; count++){
        if(priceList[count]>priceList[count+1]){
          sorted = false;
          break;
        }
      }
      expect(sorted).to.be.true;
    }
  }

  addItemsToCart(items){
    let addedItems = [];
    for(let count = 0; count<items; count++){
      this.checkoutBtnList[count].click();
      addedItems.push({name: this.inventoryItemsList[count].getText(), price: parseFloat(this.itemsPriceList[count].getText().substring(1))})
    }
    browser.config.checkoutItemsList = addedItems;
  }

  navigateToCheckout(){
    this.checkoutBtn.click()
  }
}

export default new HomePage();