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

function createRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createUniqueNumberGenerator(min, max) {
  const existentValues = new Set();

  return function () {
    if (existentValues.size >= (max - min + 1)) {
      console.error("Достигнуто максимальное количество уникальных значений");
      return null;
    }
    let currentValue;
    do {
      currentValue = createRandomNumber(min, max);
    } while (existentValues.has(currentValue));

    existentValues.add(currentValue);
    return currentValue;
  };
}

const generatorUniqueId = createUniqueNumberGenerator(1, 25);
const generatorUniqueCommentId = createUniqueNumberGenerator(1, 1000);
const generatorRandomArrayElement = (elements) => elements[createRandomNumber(0, elements.length - 1)];
const generatorNumberOfComments = () => createRandomNumber(0, 30);
const generatorAvatars = () => createRandomNumber(1, 6);
const generatorLikes = () => createRandomNumber(15, 200);

const generateComments = () => {
  const numberOfComments = generatorNumberOfComments();
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    const messageCount = createRandomNumber(1, 2);
    const message = Array.from({ length: messageCount }, () => generatorRandomArrayElement(MESSAGES)).join(' ');

    comments.push({
      id: generatorUniqueCommentId(),
      avatar: `img/avatar-${generatorAvatars()}.svg`,
      message,
      name: generatorRandomArrayElement(NAMES)
    });
  }

  return comments;
};

const descriptionOfPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: generatorRandomArrayElement(DESCRIPTIONS),
  likes: generatorLikes(),
  comments: generateComments()
});

const createPhotoDescriptions = () => {
  const photoDescriptions = [];
  for (let i = 1; i <= 25; i++) {
    photoDescriptions.push(descriptionOfPhoto(i));
  }
  return photoDescriptions;
};

const photoDescriptions = createPhotoDescriptions();

console.log(photoDescriptions);
