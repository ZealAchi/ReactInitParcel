---

## uxcore-radiogroup [![Dependency Status](http://img.shields.io/david/uxcore/uxcore-radiogroup.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-radiogroup) [![devDependency Status](http://img.shields.io/david/dev/uxcore/uxcore-radiogroup.svg?style=flat-square)](https://david-dm.org/uxcore/uxcore-radiogroup#info=devDependencies) 

## TL;DR

uxcore-radiogroup ui component for react

#### setup develop environment

```sh
$ git clone https://github.com/uxcore/uxcore-radiogroup
$ cd uxcore-radiogroup
$ npm install
$ gulp server
```

## Usage

```javascript
let RadioGroup = require('../src');
let {Item} = RadioGroup;

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleChange(value) {
        let me = this;
        console.log(value);
        me.setState({
            value: value
        });
    }

    render() {
        let me = this;
        return (
            <RadioGroup value={me.state.value} onChange={me.handleChange.bind(me)}>
                <Item value="apple" text="苹果"/>  
                <Item value="banana" text=" 香蕉"/>  
                <Item value="orange" text="橘子"/>  
            </RadioGroup> 
        )
    }
}

module.exports = Demo;
```

## Demo
http://uxcore.github.io/uxcore/


## props

### Radiogroup

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string|required|""|radioGroup 被选中的项|
|onChange|function|required|noop|点击 radio 时触发，传入参数 value，代表被选中的项|
|disabled|boolean|optional|false|是否为 disable 状态|


### Radiogroup.Item

| 配置项 | 类型 | 必填 | 默认值 | 功能/备注 |
|---|---|---|---|---|
|value|string|required|""|该 radio 所代表的值|
|text|string|optional|""|该 radio 显示的说明|
|disabled|boolean|optional|-|Item 是否为 disable 状态，具有比 Group 更高的优先级|




