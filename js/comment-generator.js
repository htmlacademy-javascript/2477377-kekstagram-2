import { createRandomNumber, generateUniqueCommentId } from './random-util.js';
import { MESSAGES, NAMES } from './photo-data.js';

const MIN_AVATAR_ID = 1;
const MAX_AVATAR_ID = 6;
const MIN_MESSAGE_COUNT = 1;
const MAX_MESSAGE_COUNT = 2;
const MIN_COMMENTS_COUNT = 0;
const MAX_COMMENTS_COUNT = 30;

function returnRandomArrayElement(elements) {
  return elements[createRandomNumber(0, elements.length - 1)];
}

function generateAvatarsCount() {
  return createRandomNumber(MIN_AVATAR_ID, MAX_AVATAR_ID);
}

function generateOfMessageCount() {
  return createRandomNumber(MIN_MESSAGE_COUNT, MAX_MESSAGE_COUNT);
}

function generateComments() {
  const numberOfComments = createRandomNumber(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT); // 0 to 30 comments
  const comments = [];

  for (let i = 0; i < numberOfComments; i++) {
    const messageCount = generateOfMessageCount();
    const message = Array.from({ length: messageCount }, () => returnRandomArrayElement(MESSAGES)).join(' ');

    comments.push({
      id: generateUniqueCommentId(),
      avatar: `img/avatar-${generateAvatarsCount()}.svg`,
      message,
      name: returnRandomArrayElement(NAMES)
    });
  }

  return comments;
}

export { generateComments };
