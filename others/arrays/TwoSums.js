// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

function twoSum(nums, target) {
  let pointer1 = 0;
  let pointer2 = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[pointer1] + nums[pointer2] >= target) {
      break;
    } else {
      pointer1 = i;
      pointer2 = i + 1;
    }
  }

  return [pointer1, pointer2];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
