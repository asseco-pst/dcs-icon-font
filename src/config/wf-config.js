function getConfig(customOpts = {}) {
  const buildPath = customOpts.out || 'build';
  
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
