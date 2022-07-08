function processData(input) {
  const arr = input.split("\n");
  const phoneBook = {};
  for (let i = 1; i <= arr[0]; i++) {
    const entries = arr[i].split(" ");
    phoneBook[entries[0]] = entries[1];
  }

  const initValue = ++arr[0];

  const names = arr.slice(initValue, arr.length);

  for (const name of names) {
    if (phoneBook[name]) console.log(`${name}=${phoneBook[name]}`);
    else console.log("Not found");
  }
}

processData(`3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry`);