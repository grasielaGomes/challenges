function getSecondLargest(nums) {
  const uniqueNumbers = new Set(nums);
  const sortedNumbers = [...uniqueNumbers].sort((a, b) => a - b);
  return sortedNumbers[sortedNumbers.length - 2];
}

getSecondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

function birthday(s, d, m) {
  let counter = m;
  let divider = 0;

  for (let i = 0; i < s.length; i++) {
    let sum = 0;
    if (i + m <= s.length) {
      const chunk = s.slice(i, i + m);

      for (const v of chunk) {
        sum += v;
      }

      counter += m;

      if (sum === d) divider++;
    }
  }

  return divider;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
