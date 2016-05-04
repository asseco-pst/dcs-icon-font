import minimist from 'minimist';
const argv = minimist(process.argv);

const buildPath = argv.fontName || 'build';

const webfontsOptions = {
  dest: buildPath,
  fontName: argv.fontName || 'dcsIconFont',
  templateOptions: {
    classPrefix: argv.classPrefix || 'dcs-icon-',
    baseClass: argv.baseClass || 'dcs-icon'
  },
  html: argv.html || false,
  htmlDest: `${buildPath}/preview.html`,
};
console.log(webfontsOptions);
export {
  webfontsOptions
};
