
describe('Test chai', () => {
  describe('#should', () => {
    it('is running', () => {
      let chai = require('chai');
      chai.should();
      Number(1).should.be.a('number');
    });
  });

  describe('#expect', () => {
    it('is running', () => {
      var expect = require('chai').expect;
      expect(1).to.be.a('number');
    });
  });

  describe('#assert', () => {
    it('is running', () => {
      let assert = require('chai').assert;
      assert.typeOf(1, 'number');
    });
  });
});
