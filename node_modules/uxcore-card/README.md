## uxcore-card

React card

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-card.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-card
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-card.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-card
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-card.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-card?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-card.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-card
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-card.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-card#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-card.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-card.svg
[sauce-url]: https://saucelabs.com/u/uxcore-card


### Development

```sh
git clone https://github.com/uxcore/uxcore-card
cd uxcore-card
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-card
cd uxcore-card
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

http://uxcore.github.io/components/card

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| prefixCls | String | No | - | 类名前缀 |
| className | String | No | - | 额外类名 |
| icon | React Element | No | - | 头部图标 |
| title | React Element | No | - | 头部标题 |
| tip | React Element | No | - | 头部提示 |
| overlayStyleOfTip | Object | No | { maxWidth: 400, textAlign: 'left' } | 头部提示样式 |
| placementOfTip | String | No | 'top' | 头部提示的位置，one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'] |
| extra | React Element | No | - | 头部右侧额外区域，通用用于放置动作 |
| children | React Element | No | - | 卡片内容 |
| showCollapseIcon | Bool | No | false | 显示折叠按钮 |
| onCollapseChange | func(collapse) | No | noop | 折叠状态发生改变时的回调，参数为是否被折叠 |
| contentHeight | number | No |  | 内容区高度，用于固定卡片高度的场景，默认为内容区实际渲染高度 |
| contentPaddingSize | string | No | 'middle' | 内容区间距，枚举值：middle/none |
| defaultCollapsed | bool | No | false | 默认是否折叠 |
