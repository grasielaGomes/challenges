// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
// Random array of numbers
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
    }
  }
  return arr;
}
// Bubble sort
// Almost sorted array of numbers
function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.lenght; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// Selection Sort
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) swap(arr, i, min);
  }
  return arr;
}

// Insertion sort
// Good to streamming of data that needs to be sorted constantly
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      swap(arr, j, j + 1);
      j--;
    }
  }
  return arr;
}

console.log("------Insertion Sort------");
console.log(insertionSort([5, 4, 9, 20, 1, 2, 3, 10, 7, 8]));

// Merge Sort
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  return result.concat(left, right);
}

// Quick sort
function pivot(arr, start = 0, end = arr.length) {
  const pivotArr = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivotArr > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log("------Quick Sort------");
console.log(quickSort([5, 4, 9, 20, 1, 2, 3, 10, 7, 8]));


// Radix Sort
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let index = 0; index < maxDigitCount; index++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let num of nums) {
      let digit = getDigit(num, index);
      buckets[digit].push(num);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}


console.log("------Radix Sort------");
console.log(radixSort([5, 4, 9, 20, 1, 2, 3, 10, 7, 8]));


module.exports = { bubbleSort, selectionSort, mergeSort, merge };
