// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

function binarySearch(arr, n) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((arr.length - 1) / 2);
  while (left <= right) {
    if (arr[middle] === n) return middle;
    else if (arr[middle] < n) left = middle + 1;
    else right = middle - 1;
    middle = Math.floor((left + right) / 2);
  }
  return -1;
}

function binarySearch2(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start <= end && arr[middle] !== elem) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)); // 0
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)); // 9
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // -1
