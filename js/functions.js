let checkLength = (string, maxLength) => {

    let result = string.length <= maxLength;

    return result;

}

let checkPalindrome = (string) => {

  string = string.replaceAll(" ", "");
  let normalisedString = string.toUpperCase();
  let placeholderString = "";

  for (let i = normalisedString.length -1; i >= 0; i--){

    let char = normalisedString[i];
    placeholderString += char;
  }


  return normalisedString === placeholderString;
}

let extractingNumbers = (string) => {
  string = string.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
      let char = string[i];

      if (!Number.isNaN(parseInt(char))) {
        result += char
      }
    }
      let number = parseInt(result);

      if (Number.isNaN(number)) {
        return NaN;
      }

      return number;
  }



