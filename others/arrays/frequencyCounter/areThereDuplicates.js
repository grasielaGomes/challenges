
// O(n) time and O(n) space
function areThereDuplicates(...args) {
  return new Set(args).size !== args.length;
}

// O(n) time and O(n) space
function areThereDuplicates2(...args) {
  const obj = {};
  for (let value of args) {
    if (obj[value]) return true;
    obj[value] = 1;
  }
  return false;
}

// Two pointers solution - O(n log n) time and O(1) space

function areThereDuplicates3(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 3)); // false
console.log(areThereDuplicates2(1, 2, 2)); // true
console.log(areThereDuplicates2('a', 'b', 'c', 'a')); // true