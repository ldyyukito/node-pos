var Cart = require('../../models/cart.js');
var CartItem = require('../../models/cart-item.js');




describe("Cart", function() {
  var cart = new Cart();
  var collection = [{
    barcode: 'ITEM000001',
    count: 1
  }, {
    barcode: 'ITEM000001',
    count: 1
  }, {
    barcode: 'ITEM000001',
    count: 1
  }, {
    barcode: 'ITEM000001',
    count: 1
  }, {
    barcode: 'ITEM000001',
    count: 1
  }, {
    barcode: 'ITEM000003',
    count: 1
  }, {
    barcode: 'ITEM000003',
    count: 1
  }, {
    barcode: 'ITEM000005',
    count: 1
  }, {
    barcode: 'ITEM000005',
    count: 1
  }, {
    barcode: 'ITEM000005',
    count: 1
  }];
  // cart.addItem(collection);
  describe("function", function() {

    it("groupItems", function() {
      var result = cart.groupItems(collection);
      expect(result).toEqual([{
        barcode: 'ITEM000001',
        count: 5
      }, {
        barcode: 'ITEM000003',
        count: 2
      }, {
        barcode: 'ITEM000005',
        count: 3
      }]);
    });


    it("addItem", function() {
      cart.addItem(collection);
      expect(cart.cartItems[0].barcode).toBe('ITEM000001');
      expect(cart.cartItems[0].count).toBe(5);
    });
  });



  it("should get TotalPrice", function() {

    var result = cart.getTotalPrice();
    expect(result).toBe(51);
  });

  it("should get getSaving ", function() {

    var result = cart.getSaving();
    expect(result).toBe(7.5);
  });

});
