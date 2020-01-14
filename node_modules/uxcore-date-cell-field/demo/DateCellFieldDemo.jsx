/**
 * DateCellField Component Demo for uxcore
 * @author AlphaGo88&lt;83268606@qq.com&gt;
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import Table from 'uxcore-table';
import React from 'react';
import Button from 'uxcore-button';
import DateCellField from '../src/DateCellField';

const { Constants } = Table;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log(this.table.getData());
  }

  saveRef(refName) {
    const me = this;
    return (c) => {
      me[refName] = c;
    };
  }


  render() {
    const columns = [
      { dataKey: 'startDate', editKey: 'startVal', title: 'Start Date', width: '200px', type: 'custom', customField: DateCellField },
      {
        dataKey: 'endDate',
        editKey: 'endVal',
        title: 'End Date',
        width: '200px',
        type: 'custom',
        customField: DateCellField,
        config: { locale: 'en-us', placeholder: 'please select date' },
      },
      {
        dataKey: 'action1',
        width: '120px',
        title: 'Operation',
        type: 'action',
        actions: [
          {
            title: 'Edit',
            callback: (rowData) => {
              this.table.editRow(rowData);
            },
            mode: Constants.MODE.VIEW,
          },
          {
            title: 'Save',
            callback: (rowData) => {
              this.table.saveRow(rowData);
            },
            mode: Constants.MODE.EDIT,
          },
        ],
      },
    ];

    const renderProps = {
      jsxcolumns: columns,
      ref: this.saveRef('table'),
      jsxdata: {
        data: [
          {
            startDate: '2016-01-02',
            startVal: 1451692800000,
            endDate: '2016-02-07',
            endVal: 1454803200000,
          },
        ],
      },
      actionBar: {
        'action button': () => {
          console.log(this.table.getData());
        },
      },
    };

    return (
      <div>
        <Table {...renderProps} ref={this.saveRef('table')} />
        <Button onClick={this.getData}>获取表格的值</Button>
      </div>
    );
  }
}

export default Demo;
