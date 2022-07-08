function getLetter(s) {
  let letter = '';

  switch (s.charAt(0)) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u": {
      return (letter = "A");
    }
    case "b":
    case "c":
    case "d":
    case "f":
    case "g": {
      return (letter = "B");
    }
    case "h":
    case "j":
    case "k":
    case "l":
    case "m": {
      return (letter = "C");
    }
    default:
      return (letter = "D");
  }

}

const letter = getLetter("grasiela");
console.log(letter);
