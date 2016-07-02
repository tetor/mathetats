const math = require('mathjs');

const mathetats = {
  mean: (arr) => math.mean(arr),
  median: (arr) => math.median(arr),
  min: (arr) => math.min(arr),
  max: (arr) => math.max(arr),
  variance: (arr, normalization = 'unbiased') => math.var(arr, normalization),
  stdDev: (arr) => math.std(arr),
};

module.exports = mathetats;
