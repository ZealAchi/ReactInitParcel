import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Row from '../src/Row';
import Col from '../src/Col';

Enzyme.configure({ adapter: new Adapter() });

describe('Row', () => {
  it('render correct', () => {
    mount(<Row />);
  });
});

describe('Props', () => {
  let wrapper;

  it('componentClass string support', () => {
    wrapper = mount(<Row componentClass="p" />);
    expect(wrapper.find('p')).to.have.length('1');
  });
  it('componentClass func support', () => {
    const Test = () => <p>测试用例</p>;
    wrapper = mount(<Row componentClass={Test} />);
    expect(wrapper.find('p')).to.have.length('1');
  });
  it('className support', () => {
    wrapper = mount(<Row className="test" />);
    expect(wrapper.getDOMNode().classList.contains('test')).to.be(true);
  });
  it('Children', () => {
    wrapper = mount(
      <Row className="show-grid">
        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
        <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
      </Row>
    );
    expect(wrapper.find('div').first().children()).to.have.length(3);
  });
});

