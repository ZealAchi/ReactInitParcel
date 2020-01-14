# uxcore-pagination

pagination ui component for react  
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]
[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-pagination.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-pagination
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-pagination.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-pagination
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-pagination.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-pagination?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-pagination.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-pagination
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-pagination.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-pagination#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-pagination.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-pagination.svg
[sauce-url]: https://saucelabs.com/u/uxcore-pagination

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-pagination
$ cd uxcore-pagination
$ npm install
$ npm start
```

## Usage

```js
var Pagination = require('uxcore-pagination');
React.render(
	<Pagination onChange={onChange} total={50} />, document.getElementById('target'));
```

### demo
http://uxcore.github.io/uxcore/components/pagination/

## API

## Props

|参数|说明|类型|默认值|
|---|----|---|------|
|locale|语言(zh-cn/en-us)|string|zh-cn|
|current|当前页数|number|1|
|total|数据总数|number/jsx|0|
|totalSizeOffset|数据总数偏移，会在计算分页时加在total上进行计算，用于占位|number|0|
|pageSize|每页条数|number|10|
|onChange|页码改变的回调，参数是改变后的页码|function|noop|
|showTotal|是否显示共多少条|boolean|false|
|showQuickJumper|是否可以快速跳转至某页|bool|false|
|showSizeChanger|是否可以改变 pageSize|bool|false|
|sizeOptions|sizeChanger 显示的可选 pageSize|array|[10, 20, 30, 40]|
|onShowSizeChange|pageSize 变化的回调|function|noop|
|className|当为「mini」时，是小尺寸分页|string||
|simple|当添加该属性时，显示为简单分页|object|无|
|getSelectPopupContainer|指定下拉选择框渲染的容器|function():HTML Element|插在 body 下的一个 div|
