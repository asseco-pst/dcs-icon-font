
import webfontsGenerator from 'webfonts-generator';
import glob from 'glob';

/**
 * Responsible for the generation of the icon font
 * @param  {Object} config - an object containing all the needed options for the webfont generator.
 * @return {Object} a successful response or an error in case it occurs
 */
function build(config = {}) {
  // if it is a --help access
  if (config.customOpts && (config.customOpts.help)) {
    return Promise.resolve(`
These are all the available arguments:
--out [String]: specifies where the generated code is stored into. Default "./build"
--icons [String]: specifies the directory that contains the SVG icons for which you want to generate the font. Default "./icons"
--fontname [String]: the name for your brand new font. Default "dcsIconFont"
--baseclass [String]: specifies the base css class name. Default "dcs-icon"
--cssFontsUrl [String]: the font URL to be defined into the resulting CSS file. Default: the --fontname specified
--cssDest [String]: the destination path for the resulting CSS file. Default: The --out specified
--classprefix [String]: specifies the css class prefix for all your icons. Default "dcs-icon-"
--html: enables the generation of a html file with a preview for all the icons in the generated font
--sass: generates a SCSS file instead of a CSS file
    `);
  }

  return setWebFontOptions(config)
    .then((options) =>
      generateDcsIconFont(options)
    )
    .then(() =>
      Promise.resolve({ success: true })
    )
    .catch((e) => {
      throw e;
    });
}

/**
 * Responsible for evaluating the provided arguments (config) and, if valid,
 * set up the options for the webfont generator
 * @param {Object} config the configurations provided by the user through CLI arguments
 */
function setWebFontOptions(config) {
  return new Promise((resolve, reject) => {
    try {
      const iconsPath = config.customOpts.icons || 'icons/*.svg';
      const files = glob.sync(iconsPath);

      if (!files.length) {
        reject(new Error('Invalid file list'));
      }

      if (config.customOpts.sass && config.customOpts.html) {
        reject(new Error('Is not possible to generate a HTML preview for SASS outputs'));
      }

      const options = Object.assign({}, config.webfontsOptions);
      options.files = files;

      resolve(options);
    } catch (e) {
      reject(e);
    }
  });
}

/**
 * Responsible for triggering the generation of the font
 * @param  {Object} webfontsOptions the options for the webfont generator
 * @return {Object} a promise with the result of the generation
 */
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
