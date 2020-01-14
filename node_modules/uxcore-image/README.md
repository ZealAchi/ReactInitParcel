## uxcore-image

React image

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-image.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-image
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-image.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-image
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-image.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-image?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-image.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-image
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-image.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-image#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-image.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-image.svg
[sauce-url]: https://saucelabs.com/u/uxcore-image


### Development

```sh
git clone https://github.com/uxcore/uxcore-image
cd uxcore-image
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-image
cd uxcore-image
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

http://uxcore.github.io/components/image

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| src | string | Yes | - | 图片 src |
| className | string | No | - | 额外类名 |
| prefixCls | string | No | - | 类名前缀 |
| style | object | No | {} | 图片样式 |
| height | number/string | No | 图片高度 |
| width | number/string | No | 图片宽度 |
| enableUrlAdapter | bool | No | 开启针对 oss, django, tfs 等的图片链接优化 |
| adapterType | string | No | 可以指定针对那种类型的图片 CDN 进行优化，不指定的情况下会根据 url 去一次适配内置的链接优化器 |
| lazyload | bool | No | true | 是否懒加载，在 document load 之后再加载真实图片 |
| defaultPic | string | No | 内置图片 | 预置图片 |
| showDefaultPicDelay | number | No | 200 | 显示预置图片的延迟，如果 load 的时间小于该时间，则不加载预置图片 |

