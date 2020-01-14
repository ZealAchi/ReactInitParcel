import expect from 'expect.js';
import React from 'react';
import assign from 'object-assign';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Radiogroup from '../src';
import RadiogroupItem from '../src/RadiogroupItem';

Enzyme.configure({ adapter: new Adapter() });

function renderWithProps(someProps) {
  const props = {
    value: {},
    disabled: false,
  };
  const items = [
    { disabled: false, value: 'apple', text: '苹果' },
    { value: 'banana', text: '香蕉' },
    { value: 'orange', text: '橘子' },
  ];
  assign(props, someProps);
  let RadiogroupItems = items.map(v => {
    return <RadiogroupItem disabled={v.disabled} value={v.value} text={v.text} />;
  });
  const wrapper = mount(<Radiogroup {...props}>{RadiogroupItems}</Radiogroup>);
  return wrapper;
}

function renderWithProps2() {
  class Demo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }

    handleChange(value) {
      const me = this;
      me.setState({
        value,
      });
    }

    render() {
      const me = this;
      const items = [
        { disabled: false, value: 'apple', text: '苹果' },
        { value: 'banana', text: '香蕉' },
        { value: 'orange', text: '橘子' },
      ];
      let RadiogroupItems = items.map(v => {
        return <RadiogroupItem disabled={v.disabled} value={v.value} text={v.text} />;
      });

      return (
        <Radiogroup value={me.state.value} onChange={me.handleChange.bind(me)} disabled>
          {RadiogroupItems}
        </Radiogroup>
      );
    }
  }

  return mount(<Demo />);
}

// function renderWithProps3() {
//   class Demo extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {};
//     }

//     handleChange(value) {
//       const me = this;
//       me.setState({
//         value,
//       });
//     }

//     render() {
//       const me = this;
//       const items = [
//         { disabled: false, value: 'apple', text: '苹果' },
//         { value: 'banana', text: '香蕉' },
//         { value: 'orange', text: '橘子' },
//       ];
//       let RadiogroupItems = items.map(v => {
//         return <RadiogroupItem disabled={v.disabled} value={v.value} text={v.text} />;
//       });

//       return (
//         <Radiogroup value={me.state.value} onChange={me.handleChange.bind(me)} disabled>
//           {RadiogroupItems}
//         </Radiogroup>
//       );
//     }
//   }

//   return shallow(<Demo />);
// }

describe('Radiogroup', () => {
  describe('render', () => {
    it('should render correctly', done => {
      const wrapper = renderWithProps();
      expect(wrapper.find('.kuma-radio-group-item').length).to.be(3);
      done();
    });
  });

  describe('control', () => {
    const wrapper = renderWithProps2();
    it('should handle control correctly', done => {
      wrapper.instance().handleChange('apple');
      expect(wrapper.instance().state.value).to.equal('apple');
      done();
    });
  });
});
