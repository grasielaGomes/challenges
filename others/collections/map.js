function buildMap(array) {
  const map = new Map();
  array.forEach((item) => {
    map.has(item) ? map.set(item, map.get(item) + 1) : map.set(item, 1);
  });
  return map;
}

function sockMerchant(ar) {
  const socks = buildMap(ar);

  let pairs = 0;

  socks.forEach((value) => {
    if (value >= 2) {
      pairs += Math.floor(value / 2);
    }
  });
  return pairs;
}

const array = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(array));