/**
 * Responsible for merging the default font configuration and the overrides
 * specified by the user through the CLI args
 * @param  {Object} customOpts the options specified by the user
 * @return {Object} the resulting configuration for the webfont generator
 */
function getConfig(customOpts = {}) {
  const buildPath = customOpts.out || './build';
  const webfontsOptions = {
    dest: buildPath,
    fontName: customOpts.fontname || 'dcsIconFont',
    templateOptions: {
      classPrefix: customOpts.classprefix || 'dcs-icon-',
      baseClass: customOpts.baseclass || 'dcs-icon',
    },
    html: customOpts.html || false,
    htmlDest: `${buildPath}/preview.html`,
  };

  return {
    customOpts,
    webfontsOptions,
  };
}

export {
  getConfig,
};
