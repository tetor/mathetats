const chai = require('chai');
const path = require('path');
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

  describe('#variance', () => {
    it('returns Number', () => {
      mts.variance([2, 4, 6]).should.be.a('number');
    });
    it('returns Variance', () => {
      mts.variance([2, 4, 6]).should.equal(4);
    });
    it('returns Variance', () => {
      mts.variance([2, 4, 6]).should.equal(4);
    });
    it('can set normalization to uncorrected', () => {
      mts.variance([2, 4, 6, 8], 'uncorrected').should.equal(5);
    });
    it('can set normalization to biased', () => {
      mts.variance([2, 4, 6], 'biased').should.equal(2);
    });
  });
});
