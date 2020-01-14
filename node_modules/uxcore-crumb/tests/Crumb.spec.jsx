import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Crumb from '../src/Crumb';

Enzyme.configure({ adapter: new Adapter() });

describe('Crumb', () => {
  it('render correct', () => {
    mount(<Crumb />);
  });
});

describe('Props', () => {
  let wrapper;

  it('className support', () => {
    wrapper = mount(<Crumb className="test" />);
    window.wrapper = wrapper;
    expect(wrapper.getDOMNode().className).to.be('kuma-uxcrumbs test');
  });

  it('prefixCls support', () => {
    wrapper = mount(<Crumb prefixCls="test" />);
    expect(wrapper.getDOMNode().className).to.be('test');
  });
});

describe('Children', () => {
  let wrapper;

  it('has link', () => {
    wrapper = mount(
      <Crumb>
        <Crumb.Item href="#">index</Crumb.Item>
        <Crumb.Item href="#">list</Crumb.Item>
        <Crumb.Item href="#">detail</Crumb.Item>
      </Crumb>);
    expect(wrapper.find('a')).to.have.length(3);
  });

  it('no link', () => {
    wrapper = mount(
      <Crumb>
        <Crumb.Item>index</Crumb.Item>
        <Crumb.Item>list</Crumb.Item>
        <Crumb.Item>detail</Crumb.Item>
      </Crumb>);
    expect(wrapper.find('a')).to.have.length(0);
  });

  it('link children className support', () => {
    wrapper = mount(
      <Crumb>
        <Crumb.Item href="#" className="children-classname-index">index</Crumb.Item>
      </Crumb>);
    expect(wrapper.find('a.children-classname-index')).to.have.length(1);
  });

  it('no link children className support', () => {
    wrapper = mount(
      <Crumb>
        <Crumb.Item className="children-classname-index">index</Crumb.Item>
      </Crumb>);
    expect(wrapper.find('span.children-classname-index')).to.have.length(1);
  });

  it('disabled children support', () => {
    wrapper = mount(
      <Crumb>
        <Crumb.Item className="children-classname-disabled" disabled>disabled</Crumb.Item>
      </Crumb>);
    expect(wrapper.find('[disabled]').hostNodes()).to.have.length(1);
  });
});
