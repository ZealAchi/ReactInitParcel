import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dropdown from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Dropdown', () => {
    it('has correct propTypes', () => {
        const menu = <div />;
        const wrapper = mount(
            <Dropdown overlay={menu}> 
                <div>触发</div>
            </Dropdown>
        );
        expect(wrapper.prop('prefixCls')).to.equal('kuma-dropdown');
        expect(wrapper.prop('transitionName')).to.equal('dropdownSlideUp');
    })
});