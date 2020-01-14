import React from 'react';
import RadioGroup from '../src';

const { Item } = RadioGroup;


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'apple',
    };
  }

  handleChange(value) {
    console.log(`value is changed, new value is ${value}`);
    const me = this;
    me.setState({
      value,
    });
  }

  render() {
    const me = this;
    return (
      <RadioGroup value={me.state.value} onChange={me.handleChange.bind(me)}>
        <Item value="apple" text="苹果" disabled />
        <Item value="banana" text="香蕉" />
        <Item value="orange" text="橘子" />
      </RadioGroup>
    );
  }
}

export default Demo;
