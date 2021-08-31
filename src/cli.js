import readlineSync from 'readline-sync';
/* eslint-disable no-console */

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};
