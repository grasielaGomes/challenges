function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factorial2(x) {
  if (x === 2) return 2;
  return x * factorial(x - 1);
}