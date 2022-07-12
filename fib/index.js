// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//iteration solution O(n) time and space
function fib2(n) {
  const result = [0, 1];
  for (let i = 0; i < n; i++) {
    result.push(result[i] + result[i + 1]);
  }

  return result[n];
}

// recursive solution O(2^n) time and space
function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

// recursive solution O(n) time and space using memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) return cache[args];
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

fib = memoize(fib);

module.exports = fib;
