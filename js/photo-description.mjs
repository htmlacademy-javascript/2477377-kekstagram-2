import { createRandomNumber, createUniqueNumberGenerator } from './random-util.mjs';
import { DESCRIPTIONS } from './photo-data.mjs';
import { generateComments } from './comment-generator.mjs';

const MIN_URL_NUMBER = 1;
const MAX_URL_NUMBER = 25;
const MIN_NUMBER_OF_LIKES = 15;
const MAX_NUMBER_OF_LIKES = 200;

const generateUniqueURLNumber = createUniqueNumberGenerator(MIN_URL_NUMBER, MAX_URL_NUMBER);

function generateLikes() {
  return createRandomNumber(MIN_NUMBER_OF_LIKES, MAX_NUMBER_OF_LIKES);
}

function generateRandomArrayElement(elements) {
  return elements[createRandomNumber(0, elements.length - 1)];
}

function descriptionOfPhoto(id) {
  return {
    id,
    url: `photos/${generateUniqueURLNumber()}.jpg`,
    description: generateRandomArrayElement(DESCRIPTIONS),
    likes: generateLikes(),
    comments: generateComments()
  };
}

function createPhotoDescriptions(numberOfPhotos) {
  return Array.from({ length: numberOfPhotos }, (_, i) => descriptionOfPhoto(i + 1));
}

export { createPhotoDescriptions };
