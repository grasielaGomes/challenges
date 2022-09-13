// Given two sorted arrays, find the number of elements in common. The arrays are the same length and each has all distinct elements.
// O(n) runtime complexity and O(1) space complexity
function elementsInCommon(arr1, arr2) {
  let matches = 0;
  let pointer1 = 0;
  let pointer2 = 0;

  while(pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] === arr2[pointer2]) {
      matches++;
      pointer1++;
      pointer2++;
    } else if (arr1[pointer1] < arr2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  return matches;
}

const elements1 = [13, 27, 35, 40, 49, 55, 60];
const elements2 = [17, 35, 39, 40, 55, 58, 59];
console.log(elementsInCommon(elements1, elements2));