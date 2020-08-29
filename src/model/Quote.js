export default class Quote {
  constructor(options) {
    this.ratePerHour = 150
    this.fuilMPG = 10
    this.fuilCost  = 2.25
    this.oneBr = 4
    this.twoBr = 7
    this.threeBr = 10
    this.options = options
    this.price = 0
  }
  pricePerApt () {
    let price = 0
    if(this.options.bedrooms == 1) {
      price = this.ratePerHour * this.oneBr
    } else if (this.options.bedrooms == 2) {
      price = this.ratePerHour * this.twoBr
    } else if (this.options.bedrooms == 3) {
      price = this.ratePerHour * this.threeBr
    }
    this.price += price
    return price
  }
  pricePerItems () {
    let price = 0
   if (this.options.specialItems.length > 0) {
     price += this.options.specialItems.length * 20
     this.price += price
   }
   return price
  }
}