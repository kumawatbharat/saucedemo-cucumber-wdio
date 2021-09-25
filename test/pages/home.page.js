import { expect } from 'chai'
import Page from "./page";

class HomePage extends Page{

  get sortDropDown(){
    return $('[data-test=product_sort_container]')
  }

  get itemsPriceList(){
    return $$('.inventory_item_price')
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
}

export default new HomePage();