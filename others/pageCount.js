function pageCount(n, p) {
  if (n === p || p === 1 || (n % 2 !== 0 && p === n - 1)) return 0;
  else {
    // pages in front of middle vs pages in back of middle
    const min = Math.min(p / 2, (n - p) / 2);
    return min < 1 ? 1 : Math.floor(min);
  }
}

console.log(pageCount(6, 5));
console.log(pageCount(5, 4));
console.log(pageCount(70809, 46090));
