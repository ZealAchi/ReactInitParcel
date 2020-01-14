/**
 * CheckboxCellField Component Demo for uxcore
 * @author eternalsky
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */

const Table = require('uxcore-table');
const React = require('react');
const Button = require('uxcore-button');

const CheckCellField = require('../src');

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
      {
        dataKey: 'name',
        editKey: 'nameId',
        title: 'Name',
        width: 300,
        type: 'custom',
        customField: CheckCellField,
        config: {
          data: () => [
            { value: 'xw', text: '小王' },
            { value: 'xl', text: '小李', disabled: true },
          ],
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
            name: '小王',
            nameId: ['xw'],
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

module.exports = Demo;
