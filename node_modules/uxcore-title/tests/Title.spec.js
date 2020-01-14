import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Title', () => {
  it('should render correctly', () => {
    mount(<Title />);
  });
  it('props', () => {
    const wrapper = mount(<Title type="primary" classNames="hello">新增面试标准</Title>);
    expect(wrapper.props().type).to.equal('primary');
    expect(wrapper.props().classNames).to.equal('hello');
  });
});
