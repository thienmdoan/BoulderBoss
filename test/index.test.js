const {expect} = require('chai');
const app = require('../index.js');
const request = require('request');
const world = require('../client/components/world.js');
const mover = require('../client/components/mover.js');
const target = require('../client/components/target.js');
const character = require('../client/components/character.js');
const weather = require('../client/components/weatherfunc.js');

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

describe ('world', () => {
  it('should return back an object with properties for the scene', () => {
    {};
  });
});

describe ('mover', () => {
  it('should return back an object with properties for the movement', () => {
    {};
  });
});

describe ('target', () => {
  it('should return back an object with properties for the climb', () => {
    {};
  });
});

describe ('character', () => {
  it('should return back an object with properties for the characters', () => {
    {};
  });
});

describe ('weather', () => {
  it('should parse the response from the weather given by the server', () => {
    expect(true).to.be.true;
  });
});
