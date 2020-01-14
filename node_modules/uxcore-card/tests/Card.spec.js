import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Card from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
  it('props check', function () {
    const card = mount(
      <Card
        title={'你好'}
        tip={'提示'}
      >
        <div>123123</div>
      </Card>
    )
    const instance = card.instance();
    expect(instance.props.defaultCollapsed).to.be(false)
    expect(instance.props.title).to.be('你好')
    expect(instance.props.tip).to.be('提示')
  });
  it('title', function () {
    const card = mount(
      <Card
        title={'你好'}
        tip={'提示'}
      >
        <div>123123</div>
      </Card>
    );
    const instance = card.instance();
    expect(card.find('.uxcore-card-title-text').getDOMNode().innerHTML).to.be('你好')
  })
});