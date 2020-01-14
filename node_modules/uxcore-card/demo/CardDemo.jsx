/**
 * Card Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Icon from 'uxcore-icon';
import Card from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ['内容一', '内容二', '内容三']
    };
    setTimeout(() => {
      this.setState({
        list: [...this.state.list, '内容四', '内容五', '内容六', '内容七', '内容八', '内容九', '内容十', '内容十一', '内容十二', '内容十三', '内容十四', '内容十五', '内容十六']
      })
    }, 5000)
  }
  renderOthers() {
    const { list } = this.state
    return (
      list.map((item, index) => {
        return <p key={index}>{item}</p>
      })
    )
  }

  render() {
    const cardProps = {
      title: 'Title Title Title Title Title',
      tip: '这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示这是一个提示',
      icon: <Icon usei name="shangchuan" />,
      extra: (
        <a>
        Action
        </a>
      ),
      className: 'card-demo',
      // tipIconTheme: 'dark',
      showCollapseIcon: true,
      // contentPaddingSize: 'none',
      defaultCollapsed: false,
      placementOfTip: 'topLeft',
      overlayStyleOfTip: {
        maxWidth: 500,
      },
    };
    return (
      <div>
        <Card {...cardProps} keepAlive={true}>
          <div>
            高度自适应
            {
              this.renderOthers()
            }
          </div>
        </Card>
        <Card {...cardProps} contentHeight={300} keepAlive={true}>
          <div>一些内容一些内容一些内容一些内容一些内容一些内容一些内容</div>
          {
            this.renderOthers()
          }
        </Card>
      </div>
    );
  }
}

export default Demo;
