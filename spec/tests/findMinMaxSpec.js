'use strict';

(function() {
  describe("Min-Max Numbers in a List: ", function() {
    var myApp = require(`../../app/findMinMax.js`);
    var findMinMax = myApp.findMinMax;

    describe("Only work when supplied argument is an array", function() {
      it("should return `Argument not an an array` for {}", function() {
        expect(findMinMax({})).toEqual("Argument not an an array");
      });

      it("should return `Argument not an an array` for Boolean argument", function() {
        expect(findMinMax(false)).toEqual("Argument not an an array");
      });

      it("should return `Argument not an an array` for 6", function() {
        expect(findMinMax(6)).toEqual("Argument not an an array");
      });

      it("should return `Argument not an an array` for `jk`", function() {
        expect(findMinMax("jk")).toEqual("Argument not an an array");
      });

      it("should return `Array argument must not be empty` for []", function() {
        expect(findMinMax([])).toEqual("Array argument must not be empty");
      });

      it("should return [2, 9] for [10, 4, 6, 2, 4, 5, 9]", function() {
        expect(findMinMax([10, 4, 6, 2, 4, 5, 9])).toEqual([2, 10]);
      });

    });

  	describe("Return the min and max number in the list in a new list follows `[min, max]`", function() {
      it("should return [1,4] for [1, 2, 3 , 4]", function() {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it("should return [4, 6] for [6, 4]", function() {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it("should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]", function() {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it("should return [-19, -2] for [-8, -4, -2, -15, -7, -19, -8]", function() {
        expect(findMinMax([-8, -4, -2, -15, -7, -19, -8])).toEqual([-19, -2]);
      });
    });

    describe("Return a single number in a new list if the min and max of the " + 
        "supplied list are equal", function() {
      it("should return [4] for [4, 4, 4, 4]", function() {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it("should return [9] for [9]", function() {
        expect(findMinMax([9])).toEqual([9]);
      });
    });
  });
})();
