// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let column = 0; column < n + (n - 1); column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

function pyramid2(n, row = 0, step = "") {
  // base case
  if (n === row) return;

  // recursive case on rows
  if (n + (n - 1) === step.length) {
    console.log(step);
    return pyramid(n, row + 1);
  }

  // recursive case on columns
  step.length < n - row - 1 || step.length > n + row - 1
    ? (step += " ")
    : (step += "#");
  pyramid(n, row, step);
}

module.exports = pyramid;
