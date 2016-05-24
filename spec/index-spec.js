'use strict';

const builder = require('../app/builder.js');
const config = require('../app/config/wf-config.js');
const fs = require('fs');
const rimraf = require('rimraf');

describe('Builder', () => {
  beforeEach(() => {
    rimraf.sync('build');
    jasmine.addMatchers({ toBeSuccessful });
  });

  describe('receiving the flag:', () => {
    describe('\'--help\'', () => {
      it('should present all the available cli arguments', (done) => {
        const options = config.getConfig({ help: true });

        builder.build(options)
          .then((result) => {
            expect(result).toContain('These are all the available arguments');
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
            expect(result).toBeSuccessful();
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
              expect(result).toBeSuccessful();
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
              expect(result).toBeSuccessful();
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
              expect(result).toBeSuccessful();
              done();
            });
          });
      });
    });

    describe('\'--out\'', () => {
      it('should store all the generated code into the \'out-test\' folder', (done) => {
        const outFolder = 'out-test';
        rimraf.sync(outFolder);
        const options = config.getConfig({ out: outFolder });
        builder.build(options)
          .then((result) => {
            fs.readdir(`./${outFolder}`, (err, files) => {
              expect(files.length).toBeGreaterThan(0);
              expect(result).toBeSuccessful();
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
              expect(result).toBeSuccessful();
              done();
            });
          });
      });
    });

    describe('\'--html\' and \'--sass\'', () => {
      it('should return an error message indicating that is there no preview for SASS outputs', (done) => {
        const options = config.getConfig({ html: true, sass: true });

        builder.build(options)
          .catch((error) => {
            expect(error).toEqual(new Error('Is not possible to generate a HTML preview for SASS outputs'));
            done();
          });
      });
    });

    describe('\'--sass\'', () => {
      const options = config.getConfig({ sass: true });
      const outPath = './build';
      const scssRegex = new RegExp('\\w+.scss');
      it('should generate a SCSS output instead of CSS', (done) => {
        builder.build(options)
          .then((result) => {
            fs.readdir(`${outPath}`, (err, files) => {
              expect(files).toBeDefined();
              expect(files).toMatch(scssRegex);
              expect(result).toBeSuccessful();
              done();
            });
          });
      });

      it('should generate a _dcsIconFont.scss file', (done) => {
        builder.build(options)
          .then((result) => {
            fs.readFile(`${outPath}/_dcsIconFont.scss`, 'utf8', (err, file) => {
              expect(file).toBeDefined();
              expect(result).toBeSuccessful();
              done();
            });
          });
      });

      it('should generate sizing classes', (done) => {
        builder.build(options)
          .then((result) => {
            fs.readFile(`${outPath}/_dcsIconFont.scss`, 'utf8', (err, file) => {
              expect(file).toContain('sm');
              expect(file).toContain('2x');
              expect(file).toContain('5x');
              expect(result).toBeSuccessful();
              done();
            });
          });
      });
    });
  });
});


function toBeSuccessful() {
  return {
    compare: (res) => {
      const successResponse = { success: true };
      const result = { pass: JSON.stringify(res) === JSON.stringify(successResponse) };

      if (!result.pass) {
        result.message =  `Expected response to be ${JSON.stringify(successResponse)}`;
      }
      return result;
    },
  };
}
