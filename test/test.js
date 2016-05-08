const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe('Test chai', () => {
  describe('#should', () => {
    it('is running', () => {
      chai.should();
      Number(1).should.be.a('number');
    });
  });

  describe('#expect', () => {
    it('is running', () => {
      expect(1).to.be.a('number');
    });
  });

  describe('#assert', () => {
    it('is running', () => {
      assert.typeOf(1, 'number');
    });
  });
});
