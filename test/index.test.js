const {expect} = require('chai');
const app = require('../index.js');
const request = require('request');

let server;
const TEST_PORT = '3000';
const HOST = `http://localhost:${TEST_PORT}/weather/losangeles`;


describe('API', () => {

  before(done => {
      server = app.listen(TEST_PORT, () => {
        done()
      });
    });
  const options = { json: true };

  describe('GET', () => {
    it('should send a get request to the API', done => {
      request.get(HOST, options, (err, res, body) => {
        expect(err).to.be.eql(null);
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
  });

  after(() => {
      server.close();
    });

});
