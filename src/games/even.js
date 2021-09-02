/* eslint-disable import/extensions */
import { getRandomInt, ROUND_COUNT } from '../cli.js';

const even = () => {
  const question = [];
  const answer = [];

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const number = getRandomInt(1, 100);
    question.push(number);
    answer.push(number % 2 === 0 ? 'yes' : 'no');
  }

  return [question, answer];
};

export default even;
