import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Icon', () => {
  it('should render correctly', () => {
    mount(<Icon name="dingding" />);
  });
});
