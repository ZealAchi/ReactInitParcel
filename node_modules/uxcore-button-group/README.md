## uxcore-button-group

React button group

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-button-group.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-button-group
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-button-group.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-button-group
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-button-group.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-button-group?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-button-group.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-button-group
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-button-group.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-button-group#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-button-group.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-button-group.svg
[sauce-url]: https://saucelabs.com/u/uxcore-button-group


### Development

```sh
git clone https://github.com/uxcore/uxcore-button-group
cd uxcore-button-group
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-button-group
cd uxcore-button-group
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

http://uxcore.github.io/components/button-group

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| prefixCls | String | No | kuma-button-group | 类名前缀，不使用 kuma 主题时可以使用 |
| className | String | No | | 额外类名 |
| type | String | No | outline | 同 Button 的 type，在 separated 为 false 的情况下，单个 button 的 type 将被这个 type 覆盖 |
| size | String | no | medium | 同 Button 的 size，ButtonGroup 下必须保证 size 统一，设置单个 Button 的 size 无效 |
| separated | Bool | No | false | 是否是分隔的形态，以下 props 仅在 separated 为 true 时起效 | 
| maxLength | Number | No | 3 | 超过多少个 Button 时开始折叠 |
| locale | String | No | zh-cn | 国际化 |
| actionType | String | No | button | 默认形态是按钮型(button) 还是 文字链接型(link) |
