## uxcore-icon

React icon

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-icon.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-icon
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-icon.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-icon
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-icon.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-icon?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-icon.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-icon
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-icon.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-icon#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-icon.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-icon.svg
[sauce-url]: https://saucelabs.com/u/uxcore-icon


### Development

```sh
git clone https://github.com/uxcore/uxcore-icon
cd uxcore-icon
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-icon
cd uxcore-icon
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

## Usage

`<Icon usei name="menu" />`

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|usei|bool|no|false| 使用 `<i>` 标签渲染 ICON，建议开启 |
|name|string|no|shezhi| 图标名字 |
|className|string|no| | 额外类名 |

其他 props 将透传给 icon 元素

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.