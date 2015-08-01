var Scanner = require('../../models/scanner.js');
describe("Scanner",function()
{
    var inputs = [ 'ITEM000001', 'ITEM000003-2'];
  describe("",function() {
    it("make the Tags be same form",function() {
      theScanner= new Scanner();
      var result = theScanner.scan(inputs);
      expect(result).toEqual([{barcode:'ITEM000001',count:1},{barcode:'ITEM000003',count:2}]);
    });
  });
});
