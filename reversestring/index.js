// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return [...str].reduce((reversed, char) => char + reversed, '');
}

module.exports = reverse;

//My first solution
// const reversed = [...str].reverse();
// return reversed.join('');

//My second solution
//return [...str].reverse().join('');

//Manually reverse 1
// let reversed = '';
// for (let char of str) {
//   reversed = char + reversed;
// }
// return reversed;
