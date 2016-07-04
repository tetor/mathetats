const chai = require('chai');
const path = require('path');
chai.should();

const mts = require(path.join(__dirname, '..', 'src', 'index'));

describe('mathetats', () => {
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

  describe('#mode', () => {
    it('returns array', () => {
      mts.mode([1, 2, 3]).should.be.a('array');
    });

    it('returns mode', () => {
      mts.mode([1, 2, 2, 3, 3]).should.eql([2, 3]);
      mts.mode(['a', 'a', 'b', 'c']).should.eql(['a']);
    });
  });

  describe('#min', () => {
    it('returns Number', () => {
      mts.min([2, 4, 6]).should.be.a('number');
    });
    it('returns minimum number', () => {
      mts.min([2, 4, 6]).should.equal(2);
    });
  });

  describe('#max', () => {
    it('return Number', () => {
      mts.max([2]).should.be.a('number');
    });
    it('returns maximum number', () => {
      mts.max([2, 4, 6]).should.equal(6);
    });
  });

  describe('#range', () => {
    it('return Number', () => {
      mts.range([2, 4]).should.be.a('number');
    });
    it('returns range of array', () => {
      mts.range([2, 4, 6]).should.equal(4);
    });
  });

  describe('#random', () => {
    it('return Number', () => {
      mts.random([2, 4]).should.be.a('number');
    });
    it('returns range of array', () => {
      mts.random([2, 4, 6]).should.oneOf([2, 4, 6]);
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

  describe('#stdDev', () => {
    it('return Number', () => {
      mts.stdDev([2, 4]).should.be.a('number');
    });
    it('returns standard deviation', () => {
      mts.stdDev([2, 4, 6]).should.equal(2);
    });
  });
});
