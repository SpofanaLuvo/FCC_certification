function palindrome(str) {
  let counter = 1;
  let newString = str.split(/[^a-zA-Z0-9]+/g).join("");
  console.log(newString);
  for (let i = 0; i < newString.length / 2; i++) {
    if (
      newString[i].toLowerCase() !==
      newString[newString.length - counter].toLowerCase()
    ) {
      return false;
    }
    counter++;
  }
  return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));
