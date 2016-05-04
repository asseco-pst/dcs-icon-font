#! /usr/bin/env node

import webfontsGenerator from 'webfonts-generator';
import glob from 'glob';
import minimist from 'minimist';
import { webfontsOptions } from './config/wf-config';

const argv = minimist(process.argv);

console.log(`Welcome, ${argv.greet}!`);

(function() {
  glob("icons/*.svg", function (er, files) {
    if (!files.length) {
      console.log("Should provide a valid list of svg icons!");
      return;
    }
    generateDcsIconFont(files);
  });
})();


function generateDcsIconFont(files) {
  webfontsOptions.files = files;

  webfontsGenerator(webfontsOptions, function(error) {
    if (error)  {
      console.log('Fail!', error);
    } else {
      console.log('Done!');
    }
  });
}
