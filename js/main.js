/*
надо 25 сгенерированных объектов

структура объекта(ключи)

1- id {число}[1 - 25], уникальное значение
2- url, {число}[photos/{{i}}.jpg] i = от 1 до 25, уникальное
3- description, {строка}, описание фото(придумать самостоятельно)
4- likes, {число}, [15 - 200]
5- comments {массив объектов} [случайное число от 0 до 30]
     {5.1 -  id {число}[любое число]
      5.2 - avatar {строка} формируется по правилу img/avatar-
      {{случайное число от 1 до 6}}.svg.
      Аватарки подготовлены в директории img.
      5.3 - message {строка}, 1 или 2 предложения из списка
        Всё отлично!
        В целом всё неплохо. Но не всё.
        Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.
        Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.
        Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.
        Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!
      5.4 - name {строка}, любое имя из своего списка

*/


function createRandomNumber(min = 1, max = 25) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createUniqueNumber(min = 1, max = 25) {
  const existentValues = [];

  return function () {
    let currentValue = createRandomNumber(min, max);
    if (existentValues.length >= (max - min + 1)) {
      console.error("Достигнуто максимальное количество фото, вернитесь позже");

      return null;
    }
  while (existentValues.includes(currentValue)) {
    currentValue = createRandomNumber(min, max);
  }
  existentValues.push(currentValue);
  return currentValue;
  };
}

const generateUniqueId = createUniqueNumber(1, 25);

const descriptionOfPhoto = () => ({
  id: generateUniqueId(),
});

console.log(descriptionOfPhoto());
console.log(descriptionOfPhoto());
console.log(descriptionOfPhoto());
