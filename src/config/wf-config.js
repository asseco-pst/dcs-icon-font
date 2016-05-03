/**
 * [baseOpts description]
 * @type {Object}
 */
const baseOpts = {
  dest: 'build/',
  fontName: 'dcsIconFont',
  templateOptions: {
    classPrefix: 'dcs-icon-',
    baseClass: 'dcs-icon'
  },
};

/**
 * [envOpts description]
 * @type {Object}
 */
const envOpts = {
  dev: {
    html: true,
    htmlDest: `${baseOpts.dest}/preview.html`,
  },
  prod: {

  }
};

const webfontsOptions = Object.assign({}, baseOpts, envOpts[process.env.NODE_ENV]);

export {
  webfontsOptions
};
