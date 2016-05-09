
import webfontsGenerator from 'webfonts-generator';
import glob from 'glob';

function build(config = {}) {
  return new Promise((resolve, reject) => {
    const iconsPath = config.customOpts.icons || 'icons/*.svg';

    try {
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

      const files = glob.sync(iconsPath);
      if (!files.length) {
        throw new Error('Invalid file list');
      }
      
      const options = Object.assign({}, config.webfontsOptions);
      options.files = files;

      generateDcsIconFont(options)
        .then(() => resolve({ success: true }))
        .catch((e) => reject(e));
    } catch (e) {
      reject(e);
    }
  });
}
//
// function readIconsDir() {
//   return new Promise( (resolve, reject) => {
//     const files = glob(iconsPath, (files) => {
//       resolve(files)
//     });
//   })
// }
// function b(files) {
//
// }
//
//
// abc
//   .then(a);
//   .then(b);

function generateDcsIconFont(webfontsOptions) {
  return new Promise((resolve, reject) => {
    webfontsGenerator(webfontsOptions, (error, result) => {
      if (error) {
        reject(error);
      }

      resolve({ success: true, result });
    });
  });
}

export {
  build,
};
