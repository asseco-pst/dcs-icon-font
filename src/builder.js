
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
These are all the available arguments:
 --out [String]: specifies where the generated code is stored into. Default "./build"
 --icons [String]: specifies the directory that contains the SVG icons for which you want to generate the font. Default "./icons"
 --baseclass [String]: specifies the base css class name. Default "dcs-icon"
 --classprefix [String]: specifies the css class prefix for all your icons. Default "dcs-icon-"
 --fontname [String]: the name for your brand new font. Default "dcsIconFont"
 --html: enables the generation of a html file with a preview for all the icons in the generated font
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
