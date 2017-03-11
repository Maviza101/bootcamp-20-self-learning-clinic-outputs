module.exports = {
	fizzBuzz: function(num) {
    // Validate num.
    if (typeof num != 'number') {
      return 'Argument is not a number';
    }

		var result = '';
		if (num % 3 == 0) {
      result += 'Fizz';
    }
    if (num % 5 == 0) {
      result += 'Buzz';
    }

    if (result == '') {
      return num;
    }
    return result;
	}
}