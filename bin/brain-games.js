#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import greeting from '../src/cli.js';
import brainEven from './brain-even.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
brainEven(name);
