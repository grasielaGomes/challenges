function processData(input) {
  const values = input.split("\n");

  for (let v = 1; v < values.length; v++) {
    const characters = values[v].split("");
    let even = "";
    let odd = "";

    for (let i = 0; i < characters.length; i++) {
      if (i % 2 === 0) {
        even += characters[i];
      } else {
        odd += characters[i];
      }
    }

    console.log(`${even} ${odd}`);
  }
}

processData("2\nHacker\nRank");
