// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. Runtime complexity needs to be O(n);

function sameFrequency(value1, value2) {
  if (value1 === value2) return true;
  const arr1 = value1.toString().split("");
  const arr2 = value2.toString().split("");
  const obj1 = {};
  const obj2 = {};

  if (arr1.length !== arr2.length) return false;

  for (let value of arr1) {
    obj1[value] = (obj1[value] || 0) + 1;
  }

  for (let value of arr2) {
    obj2[value] = (obj2[value] || 0) + 1;
  }

  for (let value of arr2) {
    if (obj1[value] !== obj2[value]) return false;
  }
  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false