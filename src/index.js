const math = require('mathjs');

const mathetats = {
  mean: (arr) => math.mean(arr),
  median: (arr) => math.median(arr),
  variance: (arr, normalization = 'unbiased') => math.var(arr, normalization),
  min: (arr) => math.min(arr),
};

module.exports = mathetats;
