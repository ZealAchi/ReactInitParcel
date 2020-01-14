import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Grid from '../src';

Enzyme.configure({ adapter: new Adapter() });

describe('Grid', () => {
  it('render correct', () => {
    mount(<Grid />);
  });
});

describe('Props', () => {
  let wrapper;

  it('componentClass string support', () => {
    wrapper = mount(<Grid componentClass="p" />);
    expect(wrapper.find('p')).to.have.length('1');
  });

  it('componentClass func support', () => {
    const Test = () => <p>测试用例</p>;
    wrapper = mount(<Grid componentClass={Test} />);
    expect(wrapper.find('p')).to.have.length('1');
  });

  it('className support', () => {
    wrapper = mount(<Grid className="test" />);
    expect(wrapper.getDOMNode().classList.contains('test')).to.be(true);
  });

  it('fluid default false support', () => {
    wrapper = mount(<Grid />);
    expect(wrapper.getDOMNode().className).to.be('kuma-container');
  });

  it('fluid support', () => {
    wrapper = mount(<Grid fluid />);
    expect(wrapper.getDOMNode().className).to.be('kuma-container-fluid');
  });
});

describe('Children', () => {
  let wrapper;

  it('Row', () => {
    wrapper = mount(
      <Grid>
        <Grid.Row>test1</Grid.Row>
        <Grid.Row>test2</Grid.Row>
        <Grid.Row>test3</Grid.Row>
      </Grid>
    );
    expect(wrapper.find('div').first().children()).to.have.length(3);
  });
});
