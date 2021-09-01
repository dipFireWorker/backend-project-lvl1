/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import greeting from './cli.js';

const ROUND_COUNT = 3;

const startGame = (gameName) => {
  let questions = [];
  let answers = [];

  const name = greeting();

  switch (gameName) {
    case 'games':
      break;
    case 'even':
      [questions, answers] = even();
      break;
    case 'calc':
      [questions, answers] = calc();
      break;
    case 'gcd':
      [questions, answers] = gcd();
      break;
    case 'progression':
      [questions, answers] = progression();
      break;
    case 'prime':
      [questions, answers] = prime();
      break;
    default:
      break;
  }

  game(name, questions, answers);
};

const game = (name, questions, answers) => {
  for (let i = 0; i < questions.length; i += 1) {
    console.log(`Question: ${questions[i]}`);

    const answer = readlineSync.question('Your answer: ');
    if (answer === answers[i]) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answers[i]}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

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

const progression = () => {
  const questions = [];
  const answers = [];

  console.log('What number is missing in the progression?');

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const start = getRandomInt(1, 20);
    const step = getRandomInt(1, 15);
    const lengthProgression = getRandomInt(5, 11);
    const missedIndex = getRandomInt(0, lengthProgression + 1);

    const questionArray = [];
    for (let ix = 0; ix < lengthProgression; ix += 1) {
      const memberProgression = start + step * ix;
      if (ix === missedIndex) {
        answers.push(`${memberProgression}`);
        questionArray.push('..');
      } else {
        questionArray.push(memberProgression);
      }
    }
    questions.push(questionArray.join(' '));
  }

  return [questions, answers];
};

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

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getGcd = (number1, number2) => {
  if (number2 > number1) {
    return getGcd(number2, number1);
  }
  if (!number2) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

export default startGame;
