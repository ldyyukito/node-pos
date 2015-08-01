var GetDate = require('../../models/getdata.js');
describe("GetData", function() {
  var dateDigitToString = function(num) {
    return num < 10 ? '0' + num : num;
  };
  var currentDate = new Date(),
    year = dateDigitToString(currentDate.getFullYear()),
    month = dateDigitToString(currentDate.getMonth() + 1),
    date = dateDigitToString(currentDate.getDate()),
    hour = dateDigitToString(currentDate.getHours()),
    minute = dateDigitToString(currentDate.getMinutes()),
    second = dateDigitToString(currentDate.getSeconds()),
    formattedDateString = year + '年' + month + '月' + date + '日 ' + hour + ':' + minute + ':' + second;
  describe("getFormattedDate", function() {
    var getData = new GetDate();
    it("should return correct formatSting", function() {
      expect(getData.get()).toEqual(formattedDateString);
    });
  });
});
