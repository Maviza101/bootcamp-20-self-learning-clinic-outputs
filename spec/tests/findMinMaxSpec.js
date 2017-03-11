'use strict';

(function() {
  describe('Min-Max Numbers in a List: ', function() {
    var myApp = require(`../../app/findMinMax.js`);
    var findMinMax = myApp.findMinMax;

    describe('Only work when supplied argument is an array of numbers', function() {
      it('should return `Argument not an an array of numbers` for {}', function() {
        expect(findMinMax({})).toBe('Argument not an an array of numbers');
      });

      it('should return `Argument not an an array of numbers` for Boolean argument', function() {
        expect(findMinMax(false)).toBe('Argument not an an array of numbers');
      });

      it('should return `Argument not an an array of numbers` for 6', function() {
        expect(findMinMax(6)).toBe('Argument not an an array of numbers');
      });

      it('should return `Argument not an an array of numbers` for [`a`, `b`, `c`]', function() {
        expect(findMinMax(['a', 'b', 'c'])).toBe('Argument not an an array of numbers');
      });

      it('should return `Argument not an an array of numbers` for [false, `a`, 7]', function() {
        expect(findMinMax([false, 'a', 7])).toBe('Argument not an an array of numbers');
      });

      it('should return [2, 9] for [10, 4, 6, 2, 4, 5, 9]', function() {
        expect(findMinMax([10, 4, 6, 2, 4, 5, 9])).toEqual([2, 9]);
      });

    });

  	describe('Return the min and max number in the list in a new list follows `[min, max]`', function() {
      it('should return [1,4] for [1, 2, 3 , 4]', function() {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function() {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function() {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-19, -2] for [-8, -4, -2, -15, -7, -19, -8]', function() {
        expect(findMinMax([-8, -4, -2, -15, -7, -19, -8])).toEqual([-19, -2]);
      });
    });

    describe('Return the number in the list in a new list follows `[min]` when the ' + 
    	'number is the min and max number in that list', function() {
      it('should return [4] for [4, 4, 4, 4]', function() {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });
    });
  });
})();
