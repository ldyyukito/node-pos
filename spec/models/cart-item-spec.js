var CartItem = require('../../models/cart-item.js');

describe("CartItem", function() {
  describe("constructor", function() {
    it("should accept barcode and count as parameters", function() {
      theCartItem = new CartItem('ITEM000000', 4);
      theCartItem.getItemInfo();
      expect(theCartItem._item[0].name).toBe("可口可乐");
      expect(theCartItem.count).toBe(4);
      expect(theCartItem._item[0].price).toBe(3.00);
    });
  });

  describe("constructor", function() {
    it("should get item's subtotal ", function() {
      theCartItem = new CartItem('ITEM000001', 5);
      theCartItem.getItemInfo();
      var result = theCartItem.getSubTotal();
      expect(result).toBe(12);
    });
  });

  describe("constructor", function() {
    it("should get item's promotionCount ", function() {
      theCartItem = new CartItem('ITEM000000', 3);
      theCartItem.getItemInfo();
      var result = theCartItem.getPromotionCount();
      expect(result).toBe(1);
    });
  });
});
