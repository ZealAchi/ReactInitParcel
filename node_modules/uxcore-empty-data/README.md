## uxcore-empty-data

React empty data

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-empty-data.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-empty-data
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-empty-data.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-empty-data
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-empty-data.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-empty-data?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-empty-data.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-empty-data
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-empty-data.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-empty-data#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-empty-data.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-empty-data.svg
[sauce-url]: https://saucelabs.com/u/uxcore-empty-data


### Development

```sh
git clone https://github.com/uxcore/uxcore-empty-data
cd uxcore-empty-data
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-empty-data
cd uxcore-empty-data
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

http://uxcore.github.io/components/empty-data

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|children|jsx|optional|暂无数据|内容|
|icon|string|optional| - | 默认的图标 |
|largeIcon|string|optional| - | 默认的大图标 |
|style|object|optional| - | root 节点的样式 |
|prefixCls|string|optional|kuma-empty-data|类名前缀，不想使用 kuma 主题时使用|
|className|string|oprional| - |root 节点的额外类名，用于定制|



