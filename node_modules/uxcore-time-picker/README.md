## uxcore-time-picker

React time picker using rc-time-picker

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Dependency Status][dep-image]][dep-url]
[![devDependency Status][devdep-image]][devdep-url] 
[![NPM downloads][downloads-image]][npm-url]

[![Sauce Test Status][sauce-image]][sauce-url]

[npm-image]: http://img.shields.io/npm/v/uxcore-time-picker.svg?style=flat-square
[npm-url]: http://npmjs.org/package/uxcore-time-picker
[travis-image]: https://img.shields.io/travis/uxcore/uxcore-time-picker.svg?style=flat-square
[travis-url]: https://travis-ci.org/uxcore/uxcore-time-picker
[coveralls-image]: https://img.shields.io/coveralls/uxcore/uxcore-time-picker.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/uxcore/uxcore-time-picker?branch=master
[dep-image]: http://img.shields.io/david/uxcore/uxcore-time-picker.svg?style=flat-square
[dep-url]: https://david-dm.org/uxcore/uxcore-time-picker
[devdep-image]: http://img.shields.io/david/dev/uxcore/uxcore-time-picker.svg?style=flat-square
[devdep-url]: https://david-dm.org/uxcore/uxcore-time-picker#info=devDependencies
[downloads-image]: https://img.shields.io/npm/dm/uxcore-time-picker.svg
[sauce-image]: https://saucelabs.com/browser-matrix/uxcore-time-picker.svg
[sauce-url]: https://saucelabs.com/u/uxcore-time-picker


### Development

```sh
git clone https://github.com/uxcore/uxcore-time-picker
cd uxcore-time-picker
npm install
npm run server
```

if you'd like to save your install time，you can use uxcore-tools globally.

```sh
npm install uxcore-tools -g
git clone https://github.com/uxcore/uxcore-time-picker
cd uxcore-time-picker
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

http://uxcore.github.io/components/time-picker

## Contribute

Yes please! See the [CONTRIBUTING](https://github.com/uxcore/uxcore/blob/master/CONTRIBUTING.md) for details.

## API

## Props

| Name | Type | Required | Default | Comments |
|---|---|---|---|---|
| clearText               | String              |  No  | 'clear' | 清除按钮的文字提示 |
| disabled                | Boolean             |  No  | false   | 是否禁用 |
| allowEmpty              | Boolean             |  No  | true | 允许清空 |
| open                    | Boolean             |  No  | false | 当前下拉展开的状态，受控属性 |
| defaultValue            | moment              |  No  | null | 默认初始值，非受控属性 |
| defaultOpenValue        | moment              |  No  | moment() | 默认面板值，用于没有设置 value/defaultValue 时，设置时区、语言 |
| value                   | moment              |  No  | null | 当前值 |
| placeholder             | String              |  No  | '' | 输入框占位符 |
| className               | String              |  No  | '' |  触发区域的 className|
| id                      | String              |  No  | '' |  触发区域的 id |
| popupClassName          | String              |  No  | '' | 面板的 className |
| showHour                | Boolean             |  No  | true |  是否显示小时 |
| showMinute              | Boolean             |  No  | true | 是否显示分钟 |
| showSecond              | Boolean             |  No  | true | 是否显示秒 |
| format                  | String              |  No  | - | moment format |
| disabledHours           | Function            |  No  | - | 禁用小时回调 |
| disabledMinutes         | Function            |  No  | - | 禁用分钟回调 |
| disabledSeconds         | Function            |  No  | - | 禁用秒回调 |
| use12Hours              | Boolean             |  No  | false | 12 小时显示模式 |
| hideDisabledOptions     | Boolean             |  No  | false | 是否隐藏被禁用的选项 |
| onChange                | Function            |  No  | null | 选择不同的值触发 |
| addon                   | Function            |  No  | - |  面板的渲染回调，用于在面板底部渲染一些其他元素，例如确认按钮，接受 panel 实例作为参数，可以使用 `panel.close()` 来关闭 panel|
| placement               | String              |  No  | bottomLeft | one of ['left','right','top','bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'] |
| transitionName          | String              |  No  | ''  |  |
| name                    | String              |  No  | - | 设置输入框的 name 属性 |
| onOpen                  | Function({ open })  |  No  |   | 在面板展开时调用     |
| onClose                 | Function({ open })  |  No  |   | 在面板收起时调用     |
| hourStep                | Number              |  No  | 1 | 小时选项间隔  |
| minuteStep              | Number              |  No  | 1 | 分钟选项间隔 |
| secondStep              | Number              |  No  | 1 | 秒选项间隔 |
| focusOnOpen             | Boolean             |  No  | false | 面板展开时自动聚焦到输入框 |
| inputReadOnly           | Boolean             |  No  | false | 输入框只读 |

