const VERSION = '0.1.0';

const math = require('mathjs');

const mathetats = {
  version: () => VERSION,
  // TODO: Argument type check http://is.js.org/
  // TODO: Divide code files
  mean: (arr) => math.mean(arr),
  median: (arr) => math.median(arr),
  mode: (arr) => math.mode(arr),
  min: (arr) => math.min(arr),
  max: (arr) => math.max(arr),
  range: (arr) => mathetats.max(arr) - mathetats.min(arr),
  random: (arr) => math.pickRandom(arr),
  variance: (arr, normalization = 'unbiased') => math.var(arr, normalization),
  stdDev: (arr) => math.std(arr),
};

module.exports = mathetats;
