import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Col from '../src/Col';
Enzyme.configure({ adapter: new Adapter() });

describe('Col', () => {
  it('render correct', () => {
    mount(<Col />);
  });
});

describe('Props', () => {
  let wrapper;

  it('componentClass string support', () => {
    wrapper = mount(<Col componentClass="p" />);
    expect(wrapper.find('p')).to.have.length('1');
  });

  it('componentClass func support', () => {
    const Test = () => <p>测试用例</p>;
    wrapper = mount(<Col componentClass={Test} />);
    expect(wrapper.find('p')).to.have.length('1');
  });

  it('className support', () => {
    wrapper = mount(<Col className="test" />);
    expect(wrapper.getDOMNode().classList.contains('test')).to.be(true);
  });

  it('set Offset of zero ', () => {
    wrapper = mount(<Col xsOffset={0} smOffset={0} mdOffset={0} lgOffset={0} />);
    expect(wrapper.getDOMNode().classList.contains('col-xs-offset-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-sm-offset-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-md-offset-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-lg-offset-0')).to.be(true);
  });
  it('set Pull of zero ', () => {
    wrapper = mount(<Col xsPull={0} smPull={0} mdPull={0} lgPull={0} />);
    expect(wrapper.getDOMNode().classList.contains('col-xs-pull-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-sm-pull-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-md-pull-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-lg-pull-0')).to.be(true);
  });
  it('set Push of zero ', () => {
    wrapper = mount(<Col xsPush={0} smPush={0} mdPush={0} lgPush={0} />);
    expect(wrapper.getDOMNode().classList.contains('col-xs-push-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-sm-push-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-md-push-0')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-lg-push-0')).to.be(true);
  });
  it('set size of one ', () => {
    wrapper = mount(<Col xs={1} sm={1} md={1} lg={1} />);
    expect(wrapper.getDOMNode().classList.contains('col-xs-1')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-sm-1')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-md-1')).to.be(true);
    expect(wrapper.getDOMNode().classList.contains('col-lg-1')).to.be(true);
  });
  it('Children', () => {
    wrapper = mount(<Col><code>&lt;{'Col xs={12} md={8}'} /&gt;</code></Col>);
    expect(wrapper.find('code')).to.have.length(1);
  });
});

