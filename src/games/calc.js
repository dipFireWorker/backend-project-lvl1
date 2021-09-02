/* eslint-disable import/extensions */
import { getRandomInt, ROUND_COUNT } from '../cli.js';

const calc = () => {
  const question = [];
  const answer = [];

  console.log('What is the result of the expression?');

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const number1 = getRandomInt(1, 100);
    const number2 = getRandomInt(1, 100);
    const sign = ['+', '-', '*'][getRandomInt(0, 3)];
    question.push(`${number1} ${sign} ${number2}`);

    if (sign === '+') {
      answer.push(`${number1 + number2}`);
    } else if (sign === '-') {
      answer.push(`${number1 - number2}`);
    } else {
      answer.push(`${number1 * number2}`);
    }
  }

  return [question, answer];
};

export default calc;
