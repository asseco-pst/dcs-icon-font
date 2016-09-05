/**
 * Responsible for merging the default font configuration and the overrides
 * specified by the user through the CLI args
 * @param  {Object} customOpts the options specified by the user
 * @return {Object} the resulting configuration for the webfont generator
 */
function getConfig(customOpts = {}) {
  const buildPath = customOpts.out || './build';
  const fontName = customOpts.fontname || 'dcsIconFont';
  const cssDest = customOpts.cssDest || buildPath;

  const webfontsOptions = {
    dest: `${buildPath}/${fontName}`,
    cssDest: `${cssDest}/${fontName}.css`,
    cssFontsUrl: customOpts.cssFontsUrl || fontName,
    fontName,
    templateOptions: {
      classPrefix: customOpts.classprefix || 'dcs-icon-',
      baseClass: customOpts.baseclass || 'dcs-icon',
    },
    htmlTemplate: customOpts.htmlTemplate || `${__dirname}/../../templates/html.hbs`,
    types: ['svg', 'ttf', 'woff', 'eot'],
    html: customOpts.html || false,
    htmlDest: customOpts.htmlDest ? `${customOpts.htmlDest}/${fontName}-preview.html` : `${cssDest}/${fontName}-preview.html`,
  };

  if (customOpts.sass) {
    webfontsOptions.cssTemplate = customOpts.scssTemplate ? customOpts.scssTemplate : `${__dirname}/../../templates/scss.hbs`;
    webfontsOptions.cssDest = `${cssDest}/_${fontName}.scss`;
  } else {
    webfontsOptions.cssTemplate = customOpts.cssTemplate ? customOpts.cssTemplate : `${__dirname}/../../templates/css.hbs`;
  }

  return {
    customOpts,
    webfontsOptions,
  };
}

export {
  getConfig,
};
