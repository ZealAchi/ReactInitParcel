import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Drawer from '../src/Drawer';

Enzyme.configure({ adapter: new Adapter() });

describe('Drawer', () => {
  it('should be ok without props', () => {
    mount(<Drawer />);
  });
  describe('Props', () => {
    let wrapper;
    it('visible', () => {
      wrapper = mount(<Drawer visible={false} />);
      const inst = wrapper.instance();
      expect(inst.props.visible).to.equal(false);
    });

    it('size', () => {
      wrapper = mount(<Drawer size="small" />);
      const inst = wrapper.find('Dialog').instance();
      expect(inst.props.width).to.equal(230);
    });

    it('closable', () => {
      wrapper = mount(<Drawer closable={false} />);
      const inst = wrapper.find('.kuma-drawer-close');
      expect(inst.length).to.be(0);
    });

    it('maskClosable', () => {
      wrapper = mount(<Drawer closable={false} placement="left" showFooter={false} visible maskClosable={false} />);
      wrapper.find('.kuma-drawer-wrap').at(0).simulate('click');
      expect(wrapper.find('.kuma-drawer-mask-hidden').length).to.be(0);
    });

    it('placement', () => {
      wrapper = mount(<Drawer closable={false} placement="right" showFooter={false} visible />);
      expect(wrapper.find('.kuma-drawer-right').length).to.be(5);
    });
  });
});
