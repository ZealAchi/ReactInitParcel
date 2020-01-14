## uxcore-notice-icon

React notice icon

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-notice-icon.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-notice-icon
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-notice-icon.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-notice-icon
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-notice-icon.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-notice-icon?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-notice-icon.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-notice-icon
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-notice-icon.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-notice-icon#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-notice-icon.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-notice-icon.svg
[sauce-url]: https://saucelabs.com/u/uxcore-notice-icon


### Development

```sh
git clone https://github.com/uxcore/uxcore-notice-icon
cd uxcore-notice-icon
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-notice-icon
cd uxcore-notice-icon
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

http://uxcore.github.io/components/notice-icon

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
|icon|string|optional|xiaoxitixingfull| 通知图标; http://uxco.re/components/icon/|
|dot|boolean|optional|false|是否显示通知数量；默认不展示数字，只有一个小红点|
|count|number|optional|-|通知的数量|
|overflowCount|number|optional|99|通知封顶的数字|
|trigger|string|optional|hover|触发方式。枚举值: 'hover', 'click'|
|title|string|optional|通知|通知标题|
|placement|string|optional|bottomRight|箭头位置|
|emptyIcon|string|optional|默认图标|其他可选: 'access_restriction','acitve_empty','request_error','search_empty','unknown_error';http://uxco.re/components/icon/|
|emptyText|string|optional|暂无数据|占位文字|
|onVisibleChange|function|optional|fuction(visible)|显隐状态的回调
|topAction|React Element|optional|-|右上角操作|
|bottomAction|object \/ render function|optional|-|支持默认(详见说明1)和自定义形式
|className|string|opitonal|-|添加在icon上的class|
|overlayClassName|string|opitonal|-|添加在Popover上的class|
|enablePopover|bool|optional|-|false|是否使用弹窗|
|onIconClick|function|optional|-|点击Icon触发的事件，但在trigger mode 是 'click' 且使用弹窗时不会触发|
|themeType|string|optional|'default'|其他可选: 'dark'|

说明:
1. bottomAction如果使用默认样式渲染，propTypes 需为object且按如下定义
    ```js
    <NoticeIcon
        ...
        bottomAction = { text: string, action: function }
    >
    ```
    
    如果是使用自定义的方式，需要传入 render function

    ```js
    // Example

    <NoticeIcon
        ...
        bottomAction ={ _ => <div>custom action bar</div> }
    >
    ```

