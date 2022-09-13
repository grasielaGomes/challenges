// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

//using set
function isUnique(str) {
  if (!str) return;
  const newStr = new Set(str);
  return newStr.size === str.length;
}

console.log(isUnique("grasiela"));

//using map
function isUnique2(str) {
  if (!str) return;
  const map = {};
  for (let char of str) {
    if (map[char]) return false;
    else {
      map[char] = 1;
    }
  }
  return true;
}

console.log(isUnique2("grsiela"));

//using sort
function isUnique3(str) {
  const strSorted = str.split("").sort();
  for (let idx = 0; idx < strSorted.length - 1; idx++) {
    if (strSorted[idx] === strSorted[idx + 1]) return false;
  }
  return true;
}

console.log(isUnique3("grasiela"));