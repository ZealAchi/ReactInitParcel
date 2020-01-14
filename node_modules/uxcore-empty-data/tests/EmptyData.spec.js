import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'uxcore-button';
import EmptyData from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('EmptyData', () => {
  it('should render correctly', () => {
    mount(<EmptyData style={{ width: '200px' }} />);
  });
  it('props', () => {
    const wrapper = mount(<EmptyData style={{ width: '200px' }} type="large">
    <div>你还没有创建目标哦</div>
    <Button type="outline" style={{ marginTop: '10px' }}>添加目标</Button>
  </EmptyData>);
    expect(wrapper.find('.kuma-empty-data-content')).to.have.length(1);
    expect(wrapper.find(EmptyData)).to.have.length(1);
    expect(wrapper.contains(<Button type="outline" style={{ marginTop: '10px' }}>添加目标</Button>)).to.equal(true);
  });
});
