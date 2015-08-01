var CartItem = require('./cart-item.js');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.groupItems = function(collection) {
  var objResult = {};
  var result = [];
  collection.forEach(function(val) {
    objResult[val.barcode] = objResult[val.barcode] || 0;
    objResult[val.barcode] += val.count;
  });
  for (var i in objResult) {
    result.push({
      barcode: i,
      count: objResult[i]
    });
  }
  return result;              //ok!
};

Cart.prototype.addItem = function(collection) {
  var cartItems = this.groupItems(collection);
    var that = this;
  cartItems.forEach(function(val) {
    var cartItem = new CartItem(val.barcode,val.count);
    cartItem.getItemInfo();
    that.cartItems.push(cartItem);
  });
  this.cartItems = that.cartItems;       //ok!
};

Cart.prototype.getTotalPrice = function() {
  var TotalPrice = 0;
  this.cartItems.forEach(function(val) {
    TotalPrice += val.getSubTotal();
  });
  return TotalPrice;                       //ok!
};

Cart.prototype.getSaving = function() {
  var saving = 0;
  this.cartItems.forEach(function(val) {
    saving += val.count * val._item[0].price;
  });
  return (saving - this.getTotalPrice());
};
module.exports = Cart;
