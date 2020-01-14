---

## uxcore-validator

[![Test Coverage](https://img.shields.io/coveralls/uxcore/uxcore-validator.svg?style=flat-square)](https://coveralls.io/r/uxcore/uxcore-validator?branch=master)
[![Dependency Status](http://img.shields.io/david/uxcore/uxcore-validator.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-validator)
[![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-validator.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-validator#info=devDependencies)

## TL;DR

base validators used in uxcore-form & uxcore-grid

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-validator
$ cd uxcore-validator
$ npm install
$ gulp server
```

> 提供了一些通用的 validator
>
> 所有的 validator 返回 true，表示通过。

* isNotEmpty: 空对象、空数组、空字符串都被理解为空。
* isNum: 判断是否为数字，注意这里的数字包括字符串和数值两种数据类型。
* isInt: 是否是整数
* isDecimal: 是否是小数
* isArray
* isRegExp
* isObject
* isFunc
* isEmail
* isUrl: 只做 host 部分的检测，这只是一个非常基础的检测，通过你需要搭配非法字符一同进行。
* isHex
* isIdCard: 是否是中国身份证。
* isCNMobile: 是否是中国手机号。


## Usage

```
var validator = require("uxcore-validator");
console.log(validator.isNum(1));
// return true
console.log(validator.isNum("1"));
// return true
console.log(validator.isNum("a"));
// return false
```





