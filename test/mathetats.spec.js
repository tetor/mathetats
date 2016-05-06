let chai = require('chai');
let path = require('path');
chai.should();

describe('mathetats', () => {
  let mts;
  beforeEach(() => {
    mts = require(path.join(__dirname, '..', 'src', 'index'));
  });

  describe('#mean', () => {
    it('returns Number', () => {
      mts.mean([1, 2]).should.be.a('number');
    });

    it('returns mean', () => {
      mts.mean([1, 2]).should.equal(1.5);
    });
  });
});
