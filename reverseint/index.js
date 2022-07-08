// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const string = n.toString().split('');
  const reversed = string.reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

//My first solution
// const sign = n < 0 ? '-' : '';
// const string = n.toString().split('');
// const reversed = string.reverse().join('');
// return parseInt(`${sign}${reversed}`);