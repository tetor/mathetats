let chai = require('chai');
let path = require('path');
chai.should();

describe('mathetats', function () {
  let mts;
  beforeEach(() => {
    mts = require(path.join(__dirname, '..', 'index'));
  });

  describe('#mean', function () {
    it('returns Number', function () {
      mts.mean([1, 2]).should.be.a('number');
    });

    it('returns mean', function () {
      mts.mean([1, 2]).should.equal(1.5);
    });
  });
});
