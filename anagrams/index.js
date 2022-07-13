// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

// Anagram with sorting O(n log n) time and space complexity
function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

// Anagram with objects O(n) time and space complexity
function anagrams2(stringA, stringB) {
  let a = {};
  let b = {};
  for (let char of stringA) {
    a[char] = (a[char] || 0) + 1;
  }
  for (let char of stringB) {
    b[char] = (b[char] || 0) + 1;
  }
  for (let key in a) {
    if (!b[key] || a[key] !== b[key]) {
      return false;
    }
  }
  return true;
}

module.exports = anagrams;
