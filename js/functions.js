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

const checkWorkingHours = (startOfWork = '07:00', endOfWork = '18:00', startOfMeeting = '13:00', meetingTimeInMin = 60) => {

  let splittedStartOfWork = startOfWork.split(':');
  let splittedEndOfWork = endOfWork.split(':');
  let splittedStartOfMeeting = startOfMeeting.split(':');

  let minStartOfWork = (parseInt(splittedStartOfWork[0], 10) * 60) + parseInt(splittedStartOfWork[1], 10);
  let minEndOfWork = (parseInt(splittedEndOfWork[0], 10) * 60) + parseInt(splittedEndOfWork[1], 10);
  let minStartOfMeeting = (parseInt(splittedStartOfMeeting[0], 10) * 60) + parseInt(splittedStartOfMeeting[1], 10);

  let endOfMeeting = minStartOfMeeting + parseInt(meetingTimeInMin, 10);

  if (minStartOfMeeting >= minStartOfWork && endOfMeeting <= minEndOfWork) {
    return true;
  } else {
    return false;
  }
}

console.log(checkWorkingHours('08:00', '17:30', '14:00', 90)); // true
console.log(checkWorkingHours('8:0', '10:0', '8:0', 120)); // true
console.log(checkWorkingHours('08:00', '14:30', '14:00', 90)); // false
console.log(checkWorkingHours('14:00', '17:30', '08:0', 90)); // false
console.log(checkWorkingHours('8:00', '17:30', '08:00', 900)); // false



