
//Runtime complexity: O(n), space complexity: O(1)
function countZeroes(array) {
  let counter = 0;
  if (!array.length) return counter;

  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === 0) counter++;
    else break;
  }
  return counter;
}

// Runtime complexity: O(log n), space complexity: O(1)
function countZeroes2(array) {
  let start = 0;
  let end = array.length - 1;
  let middle = Math.floor((start + end) / 2);
  if (array[end] === 1 || !array.length) return 0;
  if (array[start] === 0) return array.length;

  while (start < end) {
    if (array[middle] === 0 && array[middle - 1] === 1) break;
    else if (array[middle] === 1) {
      start = middle;
      middle = Math.floor((start + end) / 2);
    } else {
      end = middle;
      middle = Math.floor((start + end) / 2);
    }
  }
  return array.length - middle;
}

// recursion solution
function countZeroes3(array) {
  if (array.length === 1) return array[0] === 0 ? 1 : 0;
  if (array[0] === 0) return array.length;
  return countZeroes3(array.slice(1));
}

console.log(countZeroes2([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes2([1, 0, 0, 0, 0])); // 4
console.log(countZeroes2([0, 0, 0])); // 3
console.log(countZeroes2([1, 1, 1, 1])); // 0