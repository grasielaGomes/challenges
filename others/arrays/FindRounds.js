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

console.log(findRounds2([1, 2, 3, 4, 5, 6, 7])); // 0
console.log(findRounds2([7, 1, 2, 3, 4, 5, 6])); // 1
console.log(findRounds2([5, 6, 7, 1, 2, 3, 4])); // 3
console.log(findRounds2([7, 6, 5, 4, 3, 2, 1])); // 6
console.log(findRounds2([2, 3, 4, 5])); // 0
