describe('Builder', function() {
  const builder = require('../app/builder.js');
  const config = require('../app/config/wf-config.js');
  const fs = require('fs');

  describe('receiving the \'--help\' flag', () => {
    it('should present all the available cli arguments', (done) => {
      const options = config.getConfig({ help: true });

      builder.build(options)
        .then((result) => {
          expect(result).toContain('These are all the available args');
          done();
        })
        .catch((error) => {
          expect(error).not.toBeUndefined();
          done();
        });
    });
  });

  describe('receiving the \'--icons\' flag', () => {
    it('should validate if it is not an empty file list', (done) => {
      const options = config.getConfig({ icons: './none' });

      builder.build(options)
        .catch((error) => {
          expect(error).toEqual(new Error('Invalid file list'));
          done();
        });
    });

    it('should generate the new font for the icons into the \'icons\' folder', (done) => {
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

  describe('receiving the \'--baseclass\' flag', () => {
    it('should generate the CSS declaring the style for the \'baseclass\' provided', (done) => {
      const options = config.getConfig({ baseclass: 'test-icon' });
      builder.build(options)
        .then((result) => {
          fs.readFile('./build/dcsIconFont.css', 'utf8', (err, file) => {
            expect(file).toContain('test-icon');
            expect(result).toEqual({ success: true });
            done();
          });
        });
    });
  });
});
