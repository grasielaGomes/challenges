// Given a sorted array of integers, return the index of the given key. If the key does not exist in the array, return -1.

// O(log(n)) time complexity
function search(arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // should return 4