var webfontsGenerator = require('webfonts-generator');
var glob = require("glob")

// options is optional
glob("icons/*.svg", function (er, files) {
  if (!files.length) {
    console.log("Should provide a valid list of svg icons!");
    return;
  }
  generateDcsIconFont(files);
});

function generateDcsIconFont(files) {
  var opts = {
    files: files,
    dest: 'build/',
    fontName: 'dcsIconFont',
    templateOptions: {
      classPrefix: 'dcs-icon-',
      baseClass: 'dcs-icon'
    },
  };

  webfontsGenerator(opts, function(error) {
    if (error) console.log('Fail!', error)
    else console.log('Done!')
  });
}
