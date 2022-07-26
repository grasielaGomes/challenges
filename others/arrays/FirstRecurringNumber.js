// Given an array of numbers return the first number that repeats in the array or undefined if there is no repeat.
function firstRecurringNumber(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) return array[i];
    else obj[array[i]] = true;
  }
  return undefined;
}

console.log(firstRecurringNumber([2, 1, 1, 2, 3, 5, 8, 8, 8, 8]));
console.log(firstRecurringNumber([2, 5, 1, 2, 3, 5, 8, 8, 8, 8]));
console.log(firstRecurringNumber([2, 3, 4, 5]));
