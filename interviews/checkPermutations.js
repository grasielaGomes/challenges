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

module.export = {
  checkPermutations
};

console.log(checkPermutations("abcd", "dcba"));
