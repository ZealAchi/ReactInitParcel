## uxcore-sticky

React sticky

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-sticky.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-sticky
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-sticky.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-sticky
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-sticky.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-sticky?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-sticky.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-sticky
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-sticky.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-sticky#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-sticky.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-sticky.svg
[sauce-url]: https://saucelabs.com/u/uxcore-sticky


### Development

```sh
git clone https://github.com/uxcore/uxcore-sticky
cd uxcore-sticky
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-sticky
cd uxcore-sticky
npm install
npm run dep
npm run start
```

### Test Case

```sh
npm run test
```

### Coverage

```sh
npm run coverage
```

## Demo

http://uxcore.github.io/components/sticky

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |

| prefixCls | --- | --- | --- | --- |

| className | --- | --- | --- | --- |

| offsetTop | number | false | 0 | 距离顶部的偏移量 |

| onChange | function | false | (isSticky) => {} | 粘性元素状态改变时的回调 |

| container | function | false | () => document | 定义粘性元素的容器 |

