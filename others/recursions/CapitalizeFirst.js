function capitalizeFirst(arr) {
  if (arr.length === 0) {
    return [];
  }
  return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(['hello', 'world']));
