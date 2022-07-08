// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels2(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => ["a", "e", "i", "o", "u"].includes(char)).length;
}

function vowels(str) {

  // g verify all chars and i is case insensitive
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;
