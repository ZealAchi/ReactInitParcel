## uxcore-splitter

React splitter

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-splitter.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-splitter
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-splitter.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-splitter
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-splitter.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-splitter?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-splitter.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-splitter
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-splitter.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-splitter#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-splitter.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-splitter.svg
[sauce-url]: https://saucelabs.com/u/uxcore-splitter


### Development

```sh
git clone https://github.com/uxcore/uxcore-splitter
cd uxcore-splitter
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-splitter
cd uxcore-splitter
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

http://uxcore.github.io/components/splitter

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

### Splitter

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|prefixCls|string|true|`uxcore-splitter`|className's prefix|
|className|string|false|''|custom class name|
|orientation|string|false|`horizontal`|layout type: `vertical` or `horizontal`|
|onResize|func|false|function({offsets, pane, index})|Triggered when the pane is resized.|

### Pane

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|defaultSize|number or `auto`|false|'auto'|the pane's default size|
|resizable|boolean|false|false|whether the pane can be resize by drag|
|collapsible|boolean|false|false|whether the pane can be collapsed|
|collapse|string|false|null|`collapsed` or `uncollapsed`|
|defaultCollapse|string|false|null|`collapsed` or `uncollapsed`|
|onCollapse|func|false|(collapsed) => {}|trigger when collapsed changed|

