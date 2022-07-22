// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = (str) =>
  [...str].reduce((reversed, char) => char + reversed, "");

function reverse2(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
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
