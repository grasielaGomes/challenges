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

console.log(insertionSort([5, 4, 9, 20, 1, 2, 3, 10, 7, 8]));

function mergeSort(arr) {}

function merge(left, right) {}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
