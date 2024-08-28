const DESCRIPTIONS = [
  'Хорошая красивая фотография',
  'Чувствую себя Анри Картье-Брессоном',
  'Живите с этим',
  'Павук',
  'Вредный гном',
  'Очень вредный гном',
  'Просто гном',
  'Солнышко проснулось - новый день на дворе',
  'Это я в Дубае, я ща отдыхаю',
  'Муж купил, мне муж купил'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Иов',
  'Агафопод',
  'Феодул',
  'Алексий',
  'Николай',
  'Пуплий',
  'Феона',
  'Симеон',
  'Форвин',
  'Марк',
  'Платон',
  'Феодора'
];

const MIN_ID_NUMBER = 1;
const MAX_ID_NUMBER = 25;
const MIN_URL_NUMBER = 1;
const MAX_URL_NUMBER = 25;
const MIN_COMMENT_ID = 1;
const MAX_COMMENT_ID = 1000;
const MIN_NUMBER_OF_COMMENTS = 0;
const MAX_NUMBER_OF_COMMENTS = 30;
const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const MIN_NUMBER_OF_LIKES = 15;
const MAX_NUMBER_OF_LIKES = 200;
const MIN_MESSAGE_COUNT = 1;
const MAX_MESSAGE_COUNT = 2;
const NUMBER_OF_REQUIRED_OBJECTS = 25;

function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createUniqueNumberGenerator(min, max) {
  const numbers = [];

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  for (let i = numbers.length - 1; i > 0; i--){
    const j = createRandomNumber(0,i);
    numbers [i], numbers[j] = numbers[j], numbers[i];
  }

  let index = 0;

  return function () {
    if (index >= numbers.length) {
      console.error('Достигнуто максимальное количество уникальных значений');
      return null;
    }
    return numbers[index++];
  };

}

const generateUniqueId = createUniqueNumberGenerator(MIN_ID_NUMBER, MAX_ID_NUMBER);
const generateUniqueURLNumber = createUniqueNumberGenerator(MIN_URL_NUMBER, MAX_URL_NUMBER);
const generateUniqueCommentId = createUniqueNumberGenerator(MIN_COMMENT_ID, MAX_COMMENT_ID);
const generateRandomArrayElement = (elements) => elements[createRandomNumber(0, elements.length - 1)];
const generateNumberOfComments = () => createRandomNumber(MIN_NUMBER_OF_COMMENTS, MAX_NUMBER_OF_COMMENTS);
const generateAvatars = () => createRandomNumber(MIN_AVATAR_ID, MAX_AVATAR_ID);
const generateLikes = () => createRandomNumber(MIN_NUMBER_OF_LIKES, MAX_NUMBER_OF_LIKES);
const generateOfMessageCount = () => createRandomNumber(MIN_MESSAGE_COUNT, MAX_MESSAGE_COUNT);

const generateComments = () => {
  const numberOfComments = generateNumberOfComments();
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    const messageCount = generateOfMessageCount();
    const message = Array.from({ length: messageCount }, () => generateRandomArrayElement(MESSAGES)).join(' ');

    comments.push({
      id: generateUniqueCommentId(),
      avatar: `img/avatar-${generateAvatars()}.svg`,
      message,
      name: generateRandomArrayElement(NAMES)
    });
  }

  return comments;
};

const descriptionOfPhoto = (id) => ({
  id,
  url: `photos/${generateUniqueURLNumber()}.jpg`,
  description: generateRandomArrayElement(DESCRIPTIONS),
  likes: generateLikes(),
  comments: generateComments()
});

const createPhotoDescriptions = () => Array.from({length: NUMBER_OF_REQUIRED_OBJECTS}, (_, i) => descriptionOfPhoto(i + 1));

const photoDescriptions = createPhotoDescriptions();

console.log(photoDescriptions);
