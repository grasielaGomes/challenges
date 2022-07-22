// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

function moveZeros(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count < arr.length) {
    arr[count] = 0;
    count++;
  }
  return arr;
}

console.log(moveZeros([0, 1, 0, 3, 12])); // should return [1, 3, 12, 0, 0]
console.log(moveZeros([0, 0, 1])); // should return [1, 0, 0]