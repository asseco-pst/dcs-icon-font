#! /usr/bin/env node

import * as config from './config/wf-config';
import minimist from 'minimist';
import * as builder from './builder';

const argv = minimist(process.argv);
const options = config.getConfig(argv);

builder.build(options).then((result) => {
  console.log(result);
}).catch((err) => {
  console.log('failed', err);
});
