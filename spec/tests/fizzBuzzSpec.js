describe("Fizz Buzz tests ", function() {
  var myApp = require("../../app/fizzBuzz.js");
  var fizzBuzz = myApp.fizzBuzz;

  it("should return `Argument is not a number` for Boolean false", function() {
    expect(fizzBuzz(false)).toBe('Argument is not a number');
  });

  it("should return `Argument is not a number` for []", function() {
    expect(fizzBuzz([])).toBe('Argument is not a number');
  });

  it("should return `Argument is not a number` for Boolean {}", function() {
    expect(fizzBuzz({})).toBe('Argument is not a number');
  });

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });
});