// Given 1 array and a number, return true if the array contains a pair with a sum equal to the number.

// O(nˆ2) time complexity
function hasPairWithSum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) return true;
    }
  }
  return false;
}

// Given an unsorted array of integers and a number, return true if the array contains a pair with a sum equal to the number.
// O(n) time complexity

function hasPairWithSum2(arr, num) {
  const collection = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (collection[num - arr[i]]) return true;
    collection[arr[i]] = 1;
  }
  return false;
}

console.log(hasPairWithSum2([1, 2, 3, 4, 5], 4)); // true
console.log(hasPairWithSum2([1, 2, 3, 4, 5], 5)); // true
console.log(hasPairWithSum2([3, 1, 2, 2, 4], 10)); // false
console.log(hasPairWithSum2([3, 1, 2, 2, 4], 0)); // false
console.log(hasPairWithSum2([], 2)); // false

