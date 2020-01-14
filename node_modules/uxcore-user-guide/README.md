## uxcore-user-guide

React user guide

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url]
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-user-guide.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-user-guide
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-user-guide.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-user-guide
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-user-guide.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-user-guide?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-user-guide.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-user-guide
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-user-guide.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-user-guide#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-user-guide.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-user-guide.svg
[sauce-url]: https://saucelabs.com/u/uxcore-user-guide


### Development

```sh
git clone https://github.com/uxcore/uxcore-user-guide
cd uxcore-user-guide
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-user-guide
cd uxcore-user-guide
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

http://uxcore.alibaba.net/components/uxcore-user-guide?type=others

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## 使用方法

一个产品或者页面中可能有多个引导，需要给每个引导做一个key

```javascript
const blokingUserGuide = UserGuideFactory.getWithKey('1', {
  // 可以自定义参数
  isBlocking: true,
  assistType: 'SKIP',
  onComplete() {
    /** 引导结束，执行业务逻辑 **/
  },
});
```

```javascript
const UserGuide = UserGuideFactory.getWithKey('2', {
  // 可以自定义参数
  isBlocking: false,
  assistType: 'NO_REMIND',
  onAssistClick(step) {
    // 点击 了解更多 / 不再提醒 时的回调函数
    console.log(step);
    // 可以调用 stop 关闭当前引导。
    UserGuide.stop();
    /** 业务逻辑，例如存储不再提醒，下次不要让用户查看相关提醒了。 **/
  },
});
```
config 种含有的参数包括

| 参数名 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- |
| locale | string | `'zh-cn'` | 语言 |
| prefixCls | string | `'kuma-user-guide'` | class 前缀 |
| icon | string / React 组件 | undefined | 传递 string 时，以 uxcore-icon 的名字进行渲染；如果为 falsy 的值，则不会渲染；其他直接渲染，不包含外边框。 |
| className | string | `''` | 定制类名 |
| isBlocking | boolean | `true` | 是否阻塞UI|
| assistType | string | `undefined` | 辅助按钮 / 链接，可选值包括 `'SKIP'`: 跳过; `'LEARN_MORE'`: 了解更多; `'NO_REMIND'`: 不再提醒 |
| onAssistClick | function | `undefined` | 了解更多 / 不再提醒 点击时的回调函数 |
| onComplete | function | `undefined` | 结束时的回调 |


然后给这个引导添加步骤，每个步骤可以有4种选择
* 使用React HOC

```javascript
const Step1 = UserGuide.addUserGuide({
  dom: 'button',
  step: 1,
  icon: 'shanchu',
  hint: '我是第一步提示',
  type: 'ReactComponent',
});
```
* 使用DOM

```javascript
const Step1 = UserGuide.addUserGuide({
  dom: document.getElementById('app'),
  step: 2,
  hint: '我是第二步提示',
  type: 'HTMLElement',
});
```
* 使用一个函数返回DOM

```javascript
const Step1 = UserGuide.addUserGuide({
  getDom() { return document.getElementById('app'); },
  step: 3,
  hint: '我是第三步提示',
  type: 'HTMLElementMaker',
});
```
* 使用图片

```javascript
UserGuide.addUserGuide({
  step: 4,
  hint: '我是第四步的提示，我也没有对应的DOM',
  type: 'Image',
  top: 1800,
  left: 1000,
  image: 'https://img.alicdn.com/tfs/TB1TRNAllfH8KJjy1XbXXbLdXXa-240-240.png',
  imageHeight: 120,
  imageWidth: 120,
});
```

需要开始引导时，需要

```javascript
UserGuide.start();
```

start 可以传递参数:

| 参数名 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- |
| designMode | bool | false | 是否设计模式，如果是`true`，会展示所有的步骤，以供调试及预览使用。 |


需要关闭时，可以调用
```javascript
UserGuide.stop();
```

stop 可以传递参数

| 参数名 | 类型 | 默认值 | 备注 |
| --- | --- | --- | --- |
| callOnComplete | bool | true | 关闭时是否调用onComplete |