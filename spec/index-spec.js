describe('Builder', function() {
  const builder = require('../app/builder.js');

  describe('receiving the \'--help\' flag', () => {
    it('Should present all the available cli arguments', (done) => {
      const options = { help: true };
      builder.build(options).then((result) => {
        expect(result).toContain('These are all the available args');
        done();
      });
    });
  });
});
