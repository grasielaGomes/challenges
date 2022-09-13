function URLify(str) {
  return str.trimEnd().replaceAll(" ", "%20");
}

console.log(URLify("Mr John Smith    "));
