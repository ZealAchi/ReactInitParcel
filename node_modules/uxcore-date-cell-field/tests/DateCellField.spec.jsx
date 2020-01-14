import expect from 'expect.js';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from 'uxcore-table';
import DateCellField from '../src';


Enzyme.configure({ adapter: new Adapter() });

const columns = [
  { dataKey: 'startDate', editKey: 'startVal', title: 'Start Date', width: '200px', type: 'custom', customField: DateCellField },
];

const data = {
  data: [
    {
      startDate: '2016-01-02',
      startVal: 1451692800000,
    },
  ],
};

describe('DateCellField', () => {
  it('should render correctly in table', () => {
    mount(
      <Table jsxcolumns={columns} jsxdata={data} />
    );
  });
  it('should be able to switch to edit mode', () => {
    const wrapper = mount(
      <Table jsxcolumns={columns} jsxdata={data} />
    );
    const node = wrapper.instance();
    node.editRow(node.getData().data.data[0]);
    expect(wrapper.update().find('.kuma-calendar-picker-input').length).to.be(1);
  });
  it('config should work', () => {
    const columns2 = [
      {
        dataKey: 'startDate',
        editKey: 'startVal',
        title: 'Start Date',
        width: '200px',
        type: 'custom',
        customField: DateCellField,
        config: {
          disabled: true,
        },
      },
    ];
    const wrapper = mount(
      <Table jsxcolumns={columns2} jsxdata={data} />
    );
    const node = wrapper.instance();
    node.editRow(node.getData().data.data[0]);
    expect(wrapper.update().find('input[disabled]').length).to.be(1);
  });
});
