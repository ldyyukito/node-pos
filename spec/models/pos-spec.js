var Pos = require('../../models/pos.js');
var Cart = require('../../models/cart.js');
var Scanner  = require('../../models/scanner.js');
var GetDate = require('../../models/getdate.js');
describe("CartItem", function() {
  describe("constructor", function() {
    inputs = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2',
      'ITEM000005',
      'ITEM000005',
      'ITEM000005'
    ];
    var scanner = new Scanner();
    var time = new GetDate();
    var cart = new Cart();
    var pos = new Pos();
    var tempCollection = scanner.scan(inputs);
    cart.addItem(tempCollection);
    var string = pos.receipt(cart);
    var expectText =
      '***<没钱赚商店>收据***\n' +
      '打印时间：' + time.get() + '\n' +
      '----------------------\n' +
      '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
      '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
      '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
      '----------------------\n' +
      '挥泪赠送商品：\n' +
      '名称：雪碧，数量：1瓶\n' +
      '名称：方便面，数量：1袋\n' +
      '----------------------\n' +
      '总计：51.00(元)\n' +
      '节省：7.50(元)\n' +
      '**********************';
it("", function() {
expect(string).toBe(expectText);
    });
  });
});
