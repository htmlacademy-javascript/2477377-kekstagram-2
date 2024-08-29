const checkLength = (string = '', maxLength = 1) => {

  const result = string.length <= maxLength;

  return result;

};

const checkPalindrome = (string = '') => {

  string = string.replaceAll(' ', '');
  const normalisedString = string.toUpperCase();
  let placeholderString = '';

  for (let i = normalisedString.length - 1; i >= 0; i--){

    const char = normalisedString[i];
    placeholderString += char;
  }


  return normalisedString === placeholderString;
};

const extractingNumbers = (string = '') => {
  string = string.toString();
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (!Number.isNaN(parseInt(char))) {
      result += char;
    }
  }
  const number = parseInt(result);

  if (Number.isNaN(number)) {
    return NaN;
  }

  return number;
};


