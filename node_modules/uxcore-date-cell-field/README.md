---

## uxcore-date-cell-field [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-date-cell-field.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-date-cell-field) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-date-cell-field.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-date-cell-field#info=devDependencies) 

## TL;DR

uxcore-date-cell-field ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-date-cell-field
$ cd uxcore-date-cell-field
$ npm install
$ gulp server
```

## Usage

```js
var Table = require('uxcore-table');
var DateCellField = require('uxcore-date-cell-field');
var columns = [
    { dataKey: 'startDate', title: 'Start Date', type: 'custom', customField: DateCellField },
    { dataKey: 'endDate', title: 'End Date', type: 'custom', customField: DateCellField, 
        config: {locale: 'en-us', placeholder: 'please select date'}
    }
];
React.render(
  (<Table jsxcolumns={columns} ref="grid" />),
  document.getElementById('target')
);
```

## demo
http://uxcore.github.io/

## API

## Props

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|

See [uxcore-calendar](https://github.com/uxcore/uxcore-calendar)

