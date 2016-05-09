const builder = require('../app/builder.js');
const config = require('../app/config/wf-config.js');
const fs = require('fs');

describe('Builder', () => {
  describe('receiving the flag:', () => {
    describe('\'--help\'', () => {
      it('should present all the available cli arguments', (done) => {
        const options = config.getConfig({ help: true });

        builder.build(options)
          .then((result) => {
            expect(result).toContain('These are all the available args');
            done();
          });
      });
    });

    describe('\'--icons\'', () => {
      it('should validate if it is not an empty file list', (done) => {
        const options = config.getConfig({ icons: './none' });

        builder.build(options)
          .catch((error) => {
            expect(error).toEqual(new Error('Invalid file list'));
            done();
          });
      });

      it('should generate the new font for the SVG icons into the \'icons\' folder', (done) => {
        const options = config.getConfig();
        builder.build(options)
          .then((result) => {
            const files = fs.readdirSync('./build');

            expect(files.length).toBeGreaterThan(0);
            expect(result).toEqual({ success: true });
            done();
          });
      });
    });

    describe('\'--baseclass\'', () => {
      it('should generate the CSS declaring the style for the \'baseclass\' provided', (done) => {
        const baseClass = 'test-icon';
        const options = config.getConfig({ baseclass: baseClass });
        builder.build(options)
          .then((result) => {
            fs.readFile('./build/dcsIconFont.css', 'utf8', (err, file) => {
              expect(file).toContain(baseClass);
              expect(result).toEqual({ success: true });
              done();
            });
          });
      });
    });
  
    describe('\'--classprefix\'', () => {
      it('should generate the CSS declaring the style for the \'classPrefix\' provided', (done) => {
        const classPrefix = 'test-icon-';
        const options = config.getConfig({ classprefix: classPrefix });
        builder.build(options)
          .then((result) => {
            fs.readFile('./build/dcsIconFont.css', 'utf8', (err, file) => {
              expect(file).toContain(classPrefix);
              expect(result).toEqual({ success: true });
              done();
            });
          });
      });
    });

    describe('\'--fontname\'', () => {
      it('should generate the CSS declaring the style for the \'fontname\' provided', (done) => {
        const fontName = 'testFontName';
        const options = config.getConfig({ fontname: fontName });
        builder.build(options)
          .then((result) => {
            fs.readFile(`./build/${fontName}.css`, 'utf8', (err, file) => {
              expect(file).toContain(fontName);
              expect(result).toEqual({ success: true });
              done();
            });
          });
      });
    });

    describe('\'--out\'', () => {
      it('should store all the generated code into the \'out-test\' folder', (done) => {
        const outFolder = 'out-test';
        const options = config.getConfig({ out: outFolder });
        builder.build(options)
          .then((result) => {
            fs.readdir(`./${outFolder}`, (err, files) => {
              expect(files.length).toBeGreaterThan(0);
              expect(result).toEqual({ success: true });
              done();
            });
          });
      });
    });

    describe('\'--html\'', () => {
      it('should generate a html file named \'preview.html\' with a preview for all the icons into the generated font', (done) => {
        const options = config.getConfig({ html: true });
        builder.build(options)
          .then((result) => {
            fs.readFile('./build/preview.html', 'utf8', (err, file) => {
              expect(file).toBeDefined();
              expect(result).toEqual({ success: true });
              done();
            });
          });
      });
    });
  });
});
