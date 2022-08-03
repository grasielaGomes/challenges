// Write a recursive function called fib which takes in a number and returns the nth number in the Fibonacci sequence. The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding numbers.

function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
}

function fib2(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}