/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import greeting from './cli';

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

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < ROUND_COUNT; i += 1) {
    const number = getRandomInt(1, 100);
    question.push(number);
    answer.push(number % 2 === 0 ? 'yes' : 'no');
  }

  return [question, answer];
};

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export default startGame;
