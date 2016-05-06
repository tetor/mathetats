let math = require('mathjs');

let mathetats = {
  mean: (arr) => {
    return math.mean(arr);
  },
  median: (arr) => {
    return math.median(arr);
  },
};


module.exports = mathetats;
// export default mathetats;
