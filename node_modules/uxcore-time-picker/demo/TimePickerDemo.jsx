/**
 * TimePicker Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import TimePicker from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date().getTime(),
    };
  }

  render() {
    return (
      <div style={{ width: 200 }}>
        <h1>基本使用</h1>
        <TimePicker />
        <h1>受控模式</h1>
        <TimePicker
          value={this.state.value}
          onChange={(value) => {
            console.log(value);
            this.setState({ value });
          }}
        />
        <h1>选择时分</h1>
        <TimePicker showSecond={false} />
        <h1>12H</h1>
        <TimePicker use12Hours />
        <h1>尺寸</h1>
        <TimePicker />
        <TimePicker size="middle" style={{ marginTop: 10 }} />
        <TimePicker size="small" style={{ marginTop: 10 }} />
        <h1>国际化</h1>
        <TimePicker />
        <TimePicker locale="en-us" style={{ marginTop: 10 }} />
      </div>
    );
  }
}

export default Demo;
