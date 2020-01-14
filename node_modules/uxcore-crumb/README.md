---

## uxcore-crumb [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-crumb.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-crumb) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-crumb.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-crumb#info=devDependencies) 

## TL;DR

uxcore-crumb ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-crumb
$ cd uxcore-crumb
$ npm install
$ gulp server
```

## Usage

```js
var Crumb = require('uxcore-crumb');

React.render(
  (
    <Crumb className="crumb-style crumb-root">
      <Crumb.Item href="#" className="crumb-item-style">首页</Crumb.Item>
      <Crumb.Item href="#">管理平台</Crumb.Item>
      <Crumb.Item href="#">流程管理</Crumb.Item>
      <Crumb.Item className="crumb-item-style">编辑流程信息</Crumb.Item>
    </Crumb>
  ),
  document.getElementById('demo'));
```

## demo
http://uxcore.github.io/uxcore/components/uxcore-crumb/

## API

## Props

### Crumb
| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
| className | String | Option | '' | 无 |

### Crumb.Item
| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
| className | String | Option | '' | 无 |
| href | String | Option | '' | 链接，如不传则不可点击 |
