'use strict';

module.exports = {
  findMinMax: function(arrayOfNumbers) {
    var min = arrayOfNumbers[0];
    var max = arrayOfNumbers[0];
    for (var i = 1; i < arrayOfNumbers.length; i++) {
      var num = arrayOfNumbers[i];
      if (num < min) {
        min = num;
      }
      if (num > max) {
        max = num;
      }
    }

    if (min == max) {
      return [min];
    }
    return [min, max];
  }
}
