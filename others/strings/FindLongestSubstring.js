// Write a function called findLongestSubstring which accepts a string and returns the length of the longest substring without repeating characters.

// O(n) time and O(n) space

function findLongestSubstring(str) {
  let longest = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - start + 1 is the length of the current substring
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

// console.log(findLongestSubstring2("")); // 0
// console.log(findLongestSubstring2("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
// console.log(findLongestSubstring2("thecatinthehat")); // 7
// console.log(findLongestSubstring2("bbbbb")); // 1
// console.log(findLongestSubstring2("longestsubstring")); // 8
// console.log(findLongestSubstring2("thisishowwedoit")); // 6
