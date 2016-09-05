# Mathetats

A JavaScript mathematics lib for statistics.

[![Taiga.io](https://img.shields.io/badge/ticket-on%20taiga.io-brightgreen.svg)](https://tree.taiga.io/project/tetor-mathetats/)
[![Circle CI](https://circleci.com/gh/tetor/mathetats.svg?style=shield)](https://circleci.com/gh/tetor/mathetats)
[![Codeship Status for tetor/mathetats](https://codeship.com/projects/52cfb5b0-f71b-0133-c66c-2a2f837358a4/status?branch=master)](https://codeship.com/projects/150675)
[![codecov](https://codecov.io/gh/tetor/mathetats/branch/master/graph/badge.svg)](https://codecov.io/gh/tetor/mathetats)
[![bitHound Overall Score](https://www.bithound.io/github/tetor/mathetats/badges/score.svg)](https://www.bithound.io/github/tetor/mathetats)
[![Join the chat at https://gitter.im/tetor/mathetats](https://badges.gitter.im/tetor/mathetats.svg)](https://gitter.im/tetor/mathetats?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm version](https://badge.fury.io/js/mathetats.svg)](https://badge.fury.io/js/mathetats)

## How to use

```
const mts = require('mathetats');
```

### #mean

```
mts.mean([1, 2]);
// 1.5
```

### #median

```
mts.median([1, 2, 3]);
// 2
```

### #mode

```
mts.mode([1, 2, 2, 3, 3]);
// [2, 3]
```

### #min and #max

```
let list = [1, 2, 3];
mts.min(list);
// 1
mts.max(list);
// 3
```

### #range

Get a number of array range.

```
mts.range([1, 2, 100]);
// 99
```

### #random

```
mts.random([1, 2, 3]);
// 1 or 2 or 3
```

### #variance

```
mts.variance([2, 4, 6]);
// 4
```

### #stdDev

Get a standard deviation.

```
mts.stdDev([2, 4, 6]);
// 2
```
