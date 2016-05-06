
import webfontsGenerator from 'webfonts-generator';
import glob from 'glob';

function build(config={}) {
  return new Promise((resolve, reject) => {
    const files = glob.sync('icons/*.svg');

    try {
      if (!files.length) {
        throw new Error('Should provide a non empty file list');
      }

      if (config.customOpts && config.customOpts.help) {
        resolve(`
          These are all the available args
           -- fontName: things
           -- classPrefix: things
           -- baseClass: things
           -- html: things
          `);
        return;
      }

      const options = Object.assign({}, config.webfontsOptions);
      options.files = files;
      generateDcsIconFont(options);
      resolve({ success: true });
    } catch (e) {
      reject(e);
    }
  });
}

function generateDcsIconFont(webfontsOptions) {
  return webfontsGenerator(webfontsOptions, (error, result) => {
    if (error) throw error;

    return { success: true, result };
  });
}

export {
  build,
};
