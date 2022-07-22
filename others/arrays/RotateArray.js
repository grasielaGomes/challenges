function rotateArray (array, n) {
  const value = array.length - n;
  const first = array.slice(0, value);
  const last = array.slice(value);
  return last.concat(first);
}

function rotateArray2 (array, n) {
  for (let i = 0; i < n; i++) {
    let last = array.pop()
    array.unshift(last)
  }

  return array;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)) // [5, 6, 7, 1, 2, 3, 4]
console.log(rotateArray([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
