var loadAllItems = require('./allitem-fixture.js');
var  loadPromotions = require('./promotion-fixture.js');
var allItem = loadAllItems();
var CartItem = function(barcode, count) {
  this.barcode = barcode;
  this.count = count;
  this._item = null;
};

CartItem.prototype.getItemInfo = function() {
  if (this._item) {
    return this._item;
  } else {
    var that = this;
    this._item = allItem.filter(function(val) {
      return (that.barcode === val.barcode);
    });
  }
};             //OK！

CartItem.prototype.getSubTotal = function() {
  var i = this._item[0].price * (this.count - this.getPromotionCount());
  return i;
};              //ok

CartItem.prototype.getPromotionCount = function() {
  var promotions = loadPromotions();
  var promotionCount = 0;
  var that = this;
  if (promotions[0].barcodes.indexOf(that.barcode !== -1 && that.count > 2)) {
    promotionCount = parseInt(that.count / 3);
  }
  return promotionCount;        //ok
};

module.exports = CartItem;
