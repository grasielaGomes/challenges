function mergeSortedArrays(arr1, arr2) {
  const result = [...arr1, ...arr2].sort((a, b) => a - b);
  return result;
}

function mergeSortedArrays2(arr1, arr2) {
  const result = [];
  let itemArr1 = arr1[0];
  let itemArr2 = arr2[0];
  let i = 0;
  let j = 0;

  if (arr1.length === 0) result = arr2;
  if (arr2.length === 0) result = arr1;

  while (itemArr1 || itemArr2) {
    if (!itemArr2 || itemArr1 < itemArr2) {
      result.push(itemArr1);
      itemArr1 = arr1[++i];
    } else {
      result.push(itemArr2);
      itemArr2 = arr2[++j];
    }
  }

  return result;
}

console.log(mergeSortedArrays2([1, 3, 6, 8, 11, 16, 34], [2, 3, 5, 8, 9, 10]));
