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
    numbers[i] = numbers[j];
    numbers[j] = numbers [i];
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

const generateUniqueCommentId = () => {
  const randomPart = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const timestampPart = Date.now();
  return `${randomPart}-${timestampPart}`;
};


export { createRandomNumber, createUniqueNumberGenerator, generateUniqueCommentId };
