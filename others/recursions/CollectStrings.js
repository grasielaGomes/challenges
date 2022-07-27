// Write a recursive function called collectStrings which accepts an object and returns an array of all the string values in the object.

function collectStrings(obj) {
  let result = [];
  if (typeof obj === 'string') {
    result.push(obj);
  }
  if (typeof obj === 'object') {
    for (let key in obj) {
      if (typeof obj[key] === 'string') {
        result.push(obj[key]);
      }
      if (typeof obj[key] === 'object') {
        result = result.concat(collectStrings(obj[key]));
      }
    }
  }
  return result;
}

function collectStrings2(obj) {
  const stringsArr = [];

  function gatherStrings(o) {
    for (let key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}