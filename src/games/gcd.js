/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { getRandomInt, ROUND_COUNT } from '../cli.js';

const gcd = () => {
  const question = [];
  const answer = [];

  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    question.push(`${number1} ${number2}`);
    answer.push(`${getGcd(number1, number2)}`);
  }

  return [question, answer];
};

const getGcd = (number1, number2) => {
  if (number2 > number1) {
    return getGcd(number2, number1);
  }
  if (!number2) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

export default gcd;
