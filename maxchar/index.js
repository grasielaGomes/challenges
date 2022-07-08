// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let maxChar = '';
  let max = 0
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;

//My first solution
// function maxChar (str) {
//   const chars = {}
//   for (let char of str) {
//     chars[char] = chars[char] + 1 || 1;
//   }
//   return Object.keys(chars)[0];
// }

//Second solution
// function maxChar (str) {
//   const charMap = {};
//   let maxChar = '';
//   let max = 0
//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }