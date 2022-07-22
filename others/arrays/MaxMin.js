// Complete the maxMin function in the editor below.
// maxMin has the following parameter(s):

// int k: the number of elements to select
// int arr[n]:: an array of integers

// Returns
// int: the minimum possible unfairness

function maxMin(k, arr) {
  const sorted = arr.sort((a, b) => a - b);
  const chunk = sorted.slice(0, k);
  console.log(chunk);
  return Math.max(...chunk) - Math.min(...chunk);
}

function maxMin2(k, arr) {
  const sorted = arr.sort((a, b) => a - b);
  const newK = k - 1;
  let min = Infinity;
  for (let i = 0; i < sorted.length - newK; i++) {
    const sub = sorted[i + newK] - sorted[i];
    if (sub < min) {
      min = sub;
    }
  }
  return min;
}


console.log(
  maxMin2(
    5,
    [
      4504, 1520, 5857, 4094, 4157, 3902, 822, 6643, 2422, 7288, 8245, 9948,
      2822, 1784, 7802, 3142, 9739, 5629, 5413, 7232
    ]
  )
); // 6643 - 822
