function checkPermutations(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;

  const map1 = {};
  const map2 = {};

  for (let char of str1) {
    map1[char] = map1[char] + 1 || 1;
  }

  for (let char of str2) {
    map2[char] = map2[char] + 1 || 1;
  }

  for (let char of str1) {
    if (map1[char] !== map2[char]) return false;
  }

  return true;
}

function getSubstrings(str, length) {
  const substrings = [];
  for (let idx = 0; idx <= str.length - length; idx++) {
    substrings.push(str.slice(idx, idx + length));
  }
  return substrings;
}

function findPermutations(shortString, longString) {
  const chunks = getSubstrings(longString, shortString.length);
  for (let idx = 0; idx < chunks.length; idx++) {
    if (checkPermutations(chunks[idx], shortString)) console.log(idx);
  }
}

findPermutations("abcde", "cbabaedcbabcbaaebdccbabc");
findPermutations("abbc", "cbabadcbbabbcbabaabccbabc");