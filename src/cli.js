/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export const ROUND_COUNT = 3;

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
