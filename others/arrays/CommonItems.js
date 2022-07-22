// Given 2 arrays, create a function to find the number of items that are common between the 2 arrays. Do not use the built-in array methods.
// Examples:
// commonItems([1, 2, 3, 4], [1, 2, 3, 4, 5]) ➞ 4
// commonItems([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]) ➞ 4
// commonItems([1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7]) ➞ 4
// commonItems([1, 2, 3, 4], []) ➞ 0
// Notes:
// If there are no common items, return 0.
// All arrays will be of the same length.
// The items in the arrays will be numbers.

// O(n) time complexity
function commonItems(arr1, arr2) {
  let count = 0;
  const collection = {};
  for (let i = 0; i < arr1.length; i++) {
    collection[arr1[i]] = true;
    if (collection[arr2[i]]) count++;
  }
  return count;
}

console.log(commonItems([1, 2, 3, 4], [1, 2, 3, 4, 5]));
console.log(commonItems([1, 2, 3, 4], [1, 2, 3, 4, 5, 6]));
console.log(commonItems([1, 2, 3, 4], [1, 2, 3, 4, 5, 6, 7]));
console.log(commonItems([1, 2, 3, 4], []));

// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items. Do not use the built-in array methods.
// Examples:
// const array1 = ['a', 'b', 'c', 'd', 'e'];
// const array2 = ['f', 'g', 'h', 'i', 'j'];
// commonItems(array1, array2) ➞ false

// const array1 = ['a', 'b', 'c', 'd', 'e'];
// const array2 = ['f', 'g', 'h', 'i', 'j', 'a'];
// commonItems(array1, array2) ➞ true

// O(n) time complexity
function commonItems2(arr1, arr2) {
  const collection = {};
  const max = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < max; i++) {
    collection[arr1[i]] = 1;
    if (collection[arr2[i]]) return true;
  }
  return false;
}

console.log(commonItems2(["a", "b", "c", "d", "e"], ["f", "g", "h", "i", "j"]));
console.log(commonItems2(["a"], ["f", "g", "h", "i", "j", "a"]));
console.log(commonItems2([], ["f", "g", "h", "i", "j"]));
console.log(commonItems2(["a", "b", "c", "d", "e"], []));

// Function with built-in array methods
// O(n) time complexity
function commonItems3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}

console.log("-----3-----");
console.log(commonItems3(["a"], ["f", "g", "h", "i", "j", "a"]));
console.log(commonItems3([], ["f", "g", "h", "i", "j"]));