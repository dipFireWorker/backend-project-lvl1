#!/usr/bin/env node
/* eslint-disable no-console */

import readlineSync from 'readline-sync';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(1, 100);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Question: ');
    if (isEven(number) === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(number)}'.`);
      console.log("Let's try again, Bill!");
      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

brainEven();

export default brainEven;
