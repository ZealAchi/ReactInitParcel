/**
 * Title Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Icon from 'uxcore-icon';
import Tooltip from 'uxcore-tooltip';
import Title from '../src';

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const tip = (
      <Tooltip overlay="提示文字" placement="top" trigger={['hover']}>
        <Icon name="tishi-full" className="demo-title-tip" />
      </Tooltip>
    );
    return (
      <div>
        <h2>一级标题</h2>
        <Title type="primary">新增面试标准</Title>
        <h2>二级标题</h2>
        <Title type="secondary">能力项设置</Title>
        <h2>三级标题</h2>
        <Title type="thirdary">专业能力</Title>
        <h2>一、二、三级标题</h2>
        <Title type="primary">新增面试标准</Title>
        <Title type="secondary">能力项设置</Title>
        <Title type="thirdary">专业能力</Title>
        <h2>一级标题（仅渲染标题部分）</h2>
        <Icon name="baocun" className="demo-tilte-icon large" />
        <Title noDecoration type="primary">新增面试标准</Title>
        {tip}
        <h2>二级标题（仅渲染标题部分）</h2>
        <Icon name="baocun" className="demo-tilte-icon middle" />
        <Title noDecoration type="secondary">能力项设置</Title>
        {tip}
        <h2>三级标题（仅渲染标题部分）</h2>
        <Icon name="baocun" className="demo-tilte-icon small" />
        <Title noDecoration type="thirdary">专业能力</Title>
        {tip}
        <Title type="primary" prefixCls="hello">prefixCls 为 hello</Title>
      </div>
    );
  }
}

