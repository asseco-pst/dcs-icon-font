#! /usr/bin/env node

import * as config from './config/wf-config';
import minimist from 'minimist';
import * as builder from './builder';

const argv = minimist(process.argv); // get all the specified args in the CLI
const options = config.getConfig(argv); // get the setup for the web font generator

/**
 * Generate the icon font
 */
builder.build(options).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log('failed', err);
});
