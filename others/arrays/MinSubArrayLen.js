// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. The function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(arr, n) {
  let totalSum = 0;
  let start = arr.length;
  let end = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) return 1;
    totalSum += arr[i];
  }

  if (totalSum < n) return 0;
  let tempSumStart = totalSum;
  let tempSumEnd = totalSum;

  for (let i = 0; i < arr.length; i++) {
    if (tempSumStart - arr[i] >= n) {
      tempSumStart -= arr[i];
      start--;
    }
  }

  for (let i = arr.length - 1; i > 0; i--) {
    if (tempSumEnd - arr[i] >= n) {
      tempSumEnd -= arr[i];
      end--;
    }
  }
  return Math.min(start, end);
}

function minSubArrayLen2(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // should return 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // should return 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // should return 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // should return 3
