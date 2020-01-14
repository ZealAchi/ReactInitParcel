/**
 * CellField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Table from 'uxcore-table';

import CellField from '../src';

const { Constants } = Table;
const { createCellField } = CellField;

const CustomField = createCellField();

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  saveRef(refName) {
    const me = this;
    return (c) => {
      me[refName] = c;
    };
  }

  render() {
    const columns = [
      {
        dataKey: 'text',
        editKey: 'text',
        title: 'Start Date',
        width: 200,
        type: 'custom',
        customField: CustomField,
        rules: (value) => {
          if (value.length > 5) {
            return '长度超长报错信息非常长非常长非常长非常长非常长非常长非常长非常长~';
          }
          return true;
        },
      },
      {
        dataKey: 'action1',
        width: '120',
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
            text: '1111',
          },
        ],
      },
      actionBar: {
        'action button': () => {
          console.log(this.table.getData());
        },
        standalone: () => {
          this.cell.validate();
        },
      },
    };
    const column = {
      dataKey: 'text',
      // rules: () => false,
      rules: [{
        validator: () => false,
        errMsg: '出错',
      }],
    };
    return (
      <div>
        <Table {...renderProps} />
        <h2>CellField Standalone</h2>
        <div className="standalone">
          <CellField column={column} standalone ref={this.saveRef('cell')} />
        </div>
      </div>
    );
  }
}

export default Demo;
