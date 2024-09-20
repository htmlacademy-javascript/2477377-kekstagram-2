import { createRandomNumber, generateUniqueCommentId } from './random-util.js';
import { MESSAGES, NAMES } from './photo-data.js';

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const MIN_MESSAGE_COUNT = 1;
const MAX_MESSAGE_COUNT = 2;

function generateRandomArrayElement(elements) {
  return elements[createRandomNumber(0, elements.length - 1)];
}

function generateAvatars() {
  return createRandomNumber(MIN_AVATAR_ID, MAX_AVATAR_ID);
}

function generateOfMessageCount() {
  return createRandomNumber(MIN_MESSAGE_COUNT, MAX_MESSAGE_COUNT);
}

function generateComments() {
  const numberOfComments = createRandomNumber(0, 30); // 0 to 30 comments
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
}

export { generateComments };
