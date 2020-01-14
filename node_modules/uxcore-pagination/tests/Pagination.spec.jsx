import expect from 'expect.js';
import React from 'react';
import assign from 'object-assign';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pagination from '../src';

Enzyme.configure({ adapter: new Adapter() });

function renderPageWithProps(pageProps) {
  const props = {
    total: 50,
    pageSize: 10,
    className: 'test-page',
    showTotal: true,
    showQuickJumper: true,
    showSizeChanger: true,
  };
  assign(props, pageProps);
  const wrapper = mount(<Pagination {...props} />);
  return wrapper;
}

describe('Pagination', () => {
  describe('render', () => {
    it('should render correctly', (done) => {
      const wrapper = renderPageWithProps();
      expect(wrapper.find('.test-page').length).to.be(2);
      done();
    });
  });

  describe('control', () => {
    const wrapper = renderPageWithProps({
      total: 500,
      pageSize: 10,
    });
    it('should set page correctly', (done) => {
      expect(wrapper.instance().state.current).to.be(1);
      wrapper.instance()._handleChange(2);
      expect(wrapper.instance().state.current).to.be(2);
      // done();
      wrapper.instance()._next();
      expect(wrapper.instance().state.current).to.be(3);
      wrapper.instance()._prev();
      expect(wrapper.instance().state.current).to.be(2);
      wrapper.instance()._jumpNext();
      expect(wrapper.instance().state.current).to.be(7);
      wrapper.instance()._jumpPrev();
      expect(wrapper.instance().state.current).to.be(2);
      wrapper.instance()._handleChange(30);
      wrapper.instance().options._changeSize(20);
      expect(wrapper.instance().state.current).to.be(25);
      done();
    });
    it('should quick jumper work correctly', (done) => {
      const input = wrapper.find('.kuma-page-options-quick-jumper > input');
      var inputStance = input.instance();
      inputStance.value = 10;
      // input.node.value = 10;
      input.simulate('change');
      input.simulate('keyup', {
        keyCode: 13,
      });
      expect(wrapper.instance().state.current).to.be(10);
      done();
    });
  });
});
