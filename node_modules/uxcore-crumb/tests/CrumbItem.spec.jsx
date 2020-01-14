import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CrumbItem from '../src/CrumbItem';

Enzyme.configure({ adapter: new Adapter() });

describe('CrumbItem', () => {
  it('render correct', () => {
    mount(<CrumbItem />);
  });
});

describe('CrumbItem Props', () => {
  let wrapper;

  it('className support', () => {
    wrapper = mount(<CrumbItem className="test" />);
    window.wrapper = wrapper;
    expect(wrapper.getDOMNode().className).to.be('test');
  });
});

describe('CrumbItem Children', () => {
  let wrapper;

  it('has link', () => {
    wrapper = mount(
      <div>
        <CrumbItem href="#">index</CrumbItem>
        <CrumbItem href="#">list</CrumbItem>
        <CrumbItem href="#">detail</CrumbItem>
      </div>);
    expect(wrapper.find('a')).to.have.length(3);
  });

  it('no link', () => {
    wrapper = mount(
      <div>
        <CrumbItem>index</CrumbItem>
        <CrumbItem>list</CrumbItem>
        <CrumbItem>detail</CrumbItem>
      </div>);
    expect(wrapper.find('a')).to.have.length(0);
  });
});
