/**
 * EmptyData Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const React = require('react');
const EmptyData = require('../src');
const Button = require('uxcore-button');


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div style={{ padding: '10px' }}>
        <h2>默认</h2>
        <EmptyData style={{ width: '200px' }} />
        <h2>定制</h2>
        <EmptyData style={{ width: '200px' }}>
          <div style={{ lineHeight: 2 }}>
            <div>你还没有创建目标哦</div>
            <div>马上去<a>添加目标</a></div>
          </div>
        </EmptyData>
        <h2>页面级</h2>
        <EmptyData style={{ width: '200px' }} type="large">
          <div>你还没有创建目标哦</div>
          <Button type="outline" style={{ marginTop: '10px' }}>添加目标</Button>
        </EmptyData>
        <h2>其他类型缺省页</h2>
        {[{
          img: 'access_restriction',
          name: '权限限制',
        }, {
          img: 'active_empty',
          name: '查询类空页面',
        }, {
          img: 'request_error',
          name: '网页请求错误',
        }, {
          img: 'search_empty',
          name: '网页请求错误',
        }, {
          img: 'unknown_error',
          name: '未知错误',
        }].map(item => (
          <EmptyData style={{ width: '200px', display: 'inline-block' }} icon={`//g.alicdn.com/uxcore/pic/${item.img}.png`}>
            <div style={{ lineHeight: 2 }}>
              <div>{item.name}</div>
            </div>
          </EmptyData>
        ))}
      </div>
    );
  }
}

module.exports = Demo;
