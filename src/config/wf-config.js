/**
 * Responsible for merging the default font configuration and the overrides
 * specified by the user through the CLI args
 * @param  {Object} customOpts the options specified by the user
 * @return {Object} the resulting configuration for the webfont generator
 */
function getConfig(customOpts = {}) {
  const buildPath = customOpts.fontName || 'build';

  const webfontsOptions = {
    dest: buildPath,
    fontName: customOpts.fontName || 'dcsIconFont',
    templateOptions: {
      classPrefix: customOpts.classPrefix || 'dcs-icon-',
      baseClass: customOpts.baseClass || 'dcs-icon',
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
