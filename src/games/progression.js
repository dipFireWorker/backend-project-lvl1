/* eslint-disable import/extensions */
import { getRandomInt, ROUND_COUNT } from '../cli.js';

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

export default progression;
