// O(n)
function findRounds(array) {
  let counter = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) {
      counter = i;
    }
  }
  return counter;
}

function findRounds2(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    if (array[start] < array[end]) {
      end--;
    } else {
      start++;
    }
  }

  return start;
}

function findRounds3(array) {
  let rotationCounter = 0;
  if (!array.length) return rotationCounter;
  for (let idx = 0; idx < array.length; idx++) {
    if (array[idx] > array[idx + 1]) {
      rotationCounter = idx + 1;
    }
  }
  return rotationCounter;
}

// Runtime: O(log n)
function findRounds4(array) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  if (
    !array.length ||
    (array[start] < array[middle] && array[middle] < array[end])
  )
    return 0;
  if (array[start] > array[middle] && array[middle] > array[end])
    return array.length - 1;
  while (middle < end) {
    if (array[middle] > array[end]) return end;
    else {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }
  }
}

console.log(findRounds2([1, 2, 3, 4, 5, 6, 7])); // 0
console.log(findRounds2([7, 1, 2, 3, 4, 5, 6])); // 1
console.log(findRounds2([5, 6, 7, 1, 2, 3, 4])); // 3
console.log(findRounds2([7, 6, 5, 4, 3, 2, 1])); // 6
console.log(findRounds2([2, 3, 4, 5])); // 0
