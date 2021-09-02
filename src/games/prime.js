/* eslint-disable import/extensions */
import { getRandomInt, ROUND_COUNT } from '../cli.js';

const prime = () => {
  const question = [];
  const answer = [];

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const number = getRandomInt(3, 100);
    question.push(number);
    for (let j = 2; j < number; j += 1) {
      if (number % j === 0) {
        answer.push('no');
        break;
      }
      if (j === number - 1) {
        answer.push('yes');
      }
    }
  }

  return [question, answer];
};

export default prime;
