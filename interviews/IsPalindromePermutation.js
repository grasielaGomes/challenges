function isPalindromePermutation(str) {
  if (!str) return false;

  let cleanedStr = str.replace(" ", "").toUpperCase();

  const map = {};

  for (let char of cleanedStr) {
    map[char] = map[char] + 1 || 1;
  }

  let counter = 0;

  for (let char of cleanedStr) {
    if (map[char] === 1) counter++;
  }

  return counter <= 1;
}

console.log(isPalindromePermutation("Tact Coa"));
