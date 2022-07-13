// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}

// countUniqueValues with 2 pointers
function countUniqueValues2(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    j++;
  }
  return i + 1;
}

console.log(countUniqueValues2([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues2([])); // 0
