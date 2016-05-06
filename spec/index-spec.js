describe('Builder', function() {
  const builder = require('../app/builder.js');
  const config = require('../app/config/wf-config.js');
  const fs = require('fs');

  describe('receiving the \'--help\' flag', () => {
    it('Should present all the available cli arguments', (done) => {
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
    it('Should validate if it is not an empty file list', (done) => {
      const options = config.getConfig({ icons: './none' });

      builder.build(options)
        .catch((error) => {
          expect(error).toEqual(new Error('Invalid file list'));
          done();
        });
    });

    it('Should generate the new font', (done) => {
      const options = config.getConfig({ icons: './icons' });
      builder.build(options)
        .then((result) => {
          const files = fs.readdirSync('./build');
          expect(result).toEqual({ success: true });
          expect(files.length).toBeGreaterThan(0);
          done();
        });
    });
  });
});
