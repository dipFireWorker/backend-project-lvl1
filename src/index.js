/* eslint-disable import/extensions */
/* eslint-disable no-use-before-define */
/* eslint-disable no-console */

import readlineSync from 'readline-sync';
import greeting from './cli.js';
import even from './games/even.js';
import calc from './games/calc.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';

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

export default startGame;
