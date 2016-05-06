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

  describe('#median', () => {
    it('returns Number', () => {
      mts.median([1, 2, 3]).should.be.a('number');
    });

    it('returns median', () => {
      mts.median([1, 2, 3]).should.equal(2);
    });

    it('returns avarage of two middle values if even values are passed', () => {
      mts.median([1, 2, 3, 4]).should.equal(2.5);
    });
  });
});
