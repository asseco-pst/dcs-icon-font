describe('Builder', function() {
  const builder = require('../app/builder.js');
  const config = require('../app/config/wf-config.js');

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
        });
    });
  });
});
