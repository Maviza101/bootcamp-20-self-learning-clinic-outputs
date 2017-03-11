'use strict';

module.exports = {
	aritGeo: function(arrayOfNumbers) {
    // Check for non-array parameters.
    if (!(arrayOfNumbers instanceof Array)) {
      return 'Argument not an array';
    }

    if (arrayOfNumbers.length == 0) {
      return 0;
    }

    var firstElement = arrayOfNumbers[0];
    var secondElement = arrayOfNumbers[1];
    var commonDifference = secondElement - firstElement;
    var commonRatio = secondElement / firstElement;
    var isArithProgression = true;
    var isGeoProgression = true;
    for (var i = 2; i < arrayOfNumbers.length; i++) {
      var curElement = arrayOfNumbers[i];
      var preceedingElement = arrayOfNumbers[i - 1];

      // This is true until we find any element that breaks the arithmetic progression.
      if (isArithProgression) {
        if ((curElement - preceedingElement) != commonDifference) {
          // Can't include a 'break' in this block because the progression could be geometric instead.
          isArithProgression = false;
        }
      }
      if (isGeoProgression) {
        if ((curElement / preceedingElement) != commonRatio) {
          // Can't include a 'break' in this block because the progression could be arithmetic instead.
          isGeoProgression = false;
        }
      }

      // Try to leave the loop as early as possible.
      if (!isArithProgression && !isGeoProgression) {
        break;
      }
    }

    if (isArithProgression) {
      return 'Arithmetic';
    }
    if (isGeoProgression) {
      return 'Geometric';
    }
    return -1;
  }
}
