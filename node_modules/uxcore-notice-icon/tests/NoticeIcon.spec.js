import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, { Simulate } from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoticeIcon from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('NoticeIcon', () => {
  it('render icon', () => {
    const wrapper = mount(<NoticeIcon />);
    expect(wrapper.find('.kuma-notice-icon-badge')).to.have.length(1);
  });
});

describe('Props', () => {
  let wrapper;
  it('dot', () => {
    wrapper = mount(<NoticeIcon dot />);
    expect(wrapper.find('sup')).to.have.length(1);
  });
  it('count', () => {
    wrapper = mount(<NoticeIcon count={10} />);
    const values = wrapper.find('.kuma-badge-count .current');
    const mergedValue = values.map(el => el.text()).join('');
    expect(mergedValue).to.be('10');
  });
  it('overflowCount', () => {
    wrapper = mount(<NoticeIcon overflowCount={9} count={10} />);
    expect(wrapper.find('sup').text()).to.be('9+');
  });
  it('defaultOverflowCount', () => {
    wrapper = mount(<NoticeIcon count={100} />);
    expect(wrapper.find('sup').text()).to.be('99+');
  });
  it('visibleState', (done) => {
    wrapper = mount(<NoticeIcon
      enablePopover
      onVisibleChange={(visible) => {
        expect(visible).to.be(true);
        done();
      }}
    />);
    wrapper.find('.kuma-notice-icon-badge').simulate('mouseenter');
  });
  it('triggerMode', (done) => {
    let currentMode;
    wrapper = mount(<NoticeIcon
      enablePopover
      trigger="click"
      onVisibleChange={() => {
        expect(currentMode).to.be('click');
        done();
      }}
    />);
    currentMode = 'hover';
    wrapper.find('.kuma-notice-icon-badge').simulate('mouseenter');
    currentMode = 'click';
    wrapper.find('.kuma-notice-icon-badge').simulate('click');
  });
  it('onIconClick', (done) => {
    let cbTriggered = true;
    wrapper = mount(<NoticeIcon
      enablePopover
      trigger="click"
      onIconClick={() => {
        expect(cbTriggered).to.be(false);
        done();
      }}
    />);
    wrapper.find('.kuma-notice-icon-badge').simulate('click');
    setTimeout(() => {
      cbTriggered = false;
      expect(cbTriggered).to.be(false);
      done();
    }, 200);
  });
  it('themeType', () => {
    wrapper = mount(<NoticeIcon
      enablePopover
      themeType="dark"
    />);
    expect(wrapper.find('.kuma-notice-icon-dark')).to.have.length(1);
  });
});
