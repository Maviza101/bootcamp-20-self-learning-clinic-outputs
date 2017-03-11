module.exports = {
	fizzBuzz: function(num) {
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