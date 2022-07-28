
// Naive string search
function stringSearch(str, search) {
  let matches = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) break;
      if (j === search.length - 1) matches++;
    }
  }
  return matches;
}

console.log(stringSearch("hello", "ll")); // 1
console.log(stringSearch("hello loola", "lo")); // 2
