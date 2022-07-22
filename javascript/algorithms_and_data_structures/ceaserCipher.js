function rot13(str) {
  const ceaserAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
  ];
  let decodedString = "";
  for (i = 0; i < str.length; i++) {
    var newIndex = ceaserAlphabet.indexOf(str[i]) + 13;
    if (ceaserAlphabet.indexOf(str[i]) == -1) {
      decodedString = decodedString + str[i];
    } else {
      decodedString = decodedString + ceaserAlphabet[newIndex];
    }
  }
  return decodedString;
}

console.log(rot13("SERR CVMMN!"));
