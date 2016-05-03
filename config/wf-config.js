const baseOpts = {
  dest: 'build/',
  fontName: 'dcsIconFont',
  templateOptions: {
    classPrefix: 'dcs-icon-',
    baseClass: 'dcs-icon'
  },
};

const envOpts = {
  dev: {
    html: true,
    htmlDest: baseOpts.dest,
  },
  build: {

  }
};

const options = Object.assign({}, baseOpts, envOpts[NODE_ENV]);

export {
  options
};
