const checkLength = (string = '', maxLength = 1) => string.length <= maxLength;


const checkPalindrome = (string = '') => {
  string = string.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
};


const extractingNumbers = (string = '') => {
  string = string.toString();
  const matched = string.match(/\d+/g);

  return matched ? parseInt(matched.join(''), 10) : NaN;
};

// console.log('Тест первой функции');
// console.log(checkLength('Hello', 2));
// console.log(checkLength('Hello', 10));
// console.log(checkLength('HElLO', 2));
// console.log(checkLength('HeLLo', 10));

// console.log('Тест второй функции');
// console.log(checkPalindrome('топот'));
// console.log(checkPalindrome('ДОвОд'));
// console.log(checkPalindrome('Кекс'));
// console.log(checkPalindrome('Лёша на полке клопа нашёл '));

// console.log('Тест третьей функции');
// console.log(extractingNumbers('2023 год'));
// console.log(extractingNumbers('ECMAScript 2022'));
// console.log(extractingNumbers('1 кефир, 0.5 батона'));
// console.log(extractingNumbers('агент 007'));
// console.log(extractingNumbers('а я томат'));
// console.log(extractingNumbers(2023));
// console.log(extractingNumbers(-1));
// console.log(extractingNumbers(1.5));


