const request = require('supertest');

const app = require('../src/app');


describe('GET /', function() {
  it('Service is running', function(done) {
    request(app)
      .get('/')
      .expect('API Gateway is running!')
      .expect(200, done);
  });
});