## uxcore-title

React title

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-title.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-title
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-title.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-title
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-title.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-title?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-title.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-title
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-title.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-title#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-title.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-title.svg
[sauce-url]: https://saucelabs.com/u/uxcore-title


### Development

```sh
git clone https://github.com/uxcore/uxcore-title
cd uxcore-title
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-title
cd uxcore-title
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

http://uxcore.github.io/components/title

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|className|string|no| | 额外顶级类名 |
|prefixCls|string|no|kuma-title | 类名前缀，不想使用 kuma 主题时使用 |
|type|string|no|primary| 类型，枚举值 `primary`, `secondary`, `thirdary` |

