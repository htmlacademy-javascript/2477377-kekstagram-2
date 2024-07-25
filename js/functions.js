let checkLength = (string, maxLength) => {

    let result = string.length <= maxLength;

    return result;

}

let checkPalindrome = (string) => {

  string = string.replaceAll(" ", "");
  normalisedString = string.toUpperCase();
  let placeholderString = "";

  for (let i = normalisedString.length -1; i >= 0; i--){

    let char = normalisedString[i];
    placeholderString += char;
  }


  return normalisedString === placeholderString;
}

