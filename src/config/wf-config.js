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
