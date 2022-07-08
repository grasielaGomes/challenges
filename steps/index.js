// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps2(n) {
  for (let row = 0; row < n; row++) {
    let step = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        step += "#";
      } else {
        step += " ";
      }
    }
    console.log(step);
  }
}

function steps(n, row = 0, stair = "") {
  // base case
  if (n === row) return;
  
  // recursive case on rows
  if (n === stair.length) {
    console.log(stair);
    return steps2(n, row + 1);
  }

  // recursive case on columns
  stair.length <= row ? (stair += "#") : (stair += " ");
  steps2(n, row, stair);
}

module.exports = steps;
